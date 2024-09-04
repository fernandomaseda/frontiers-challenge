"use client";
import { useLoadingPromise } from "@/utils/useLoadingPromise";
import useUpdateEffect from "@/utils/useUpdateEffect";
import { useCallback, useEffect, useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/services/firebase"; // Asegúrate de exportar tu instancia de Firestore
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const handleGemini = async (messages: Message[], currentPrompt: string) => {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is required");
  }
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const fullMessages = [
    ...messages.slice(-4), // Only use the last 4 messages for context
    {
      id: uuidv4(),
      origin: "user",
      message: currentPrompt,
      postedAt: new Date().toISOString(),
    },
  ];
  const context = fullMessages
    .map((msg) => `${msg.origin}: ${msg.message}`)
    .join("\n");

  const result = await model.generateContent(context);
  const response = await result.response;
  const data = await response.text();
  return data;
};

export interface Message {
  id: string;
  origin: "user" | "bot";
  message: string;
  postedAt: string;
}

export const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useAuth();
  const [saveMessagesFailed, setSaveMessagesFailed] = useState(false);

  const guestId = useMemo(() => {
    if (typeof window === "undefined") return null;
    let id = window.localStorage.getItem("guestId");
    if (!id) {
      id = uuidv4();
      window.localStorage.setItem("guestId", id);
    }
    return id;
  }, []);

  const collectionPath = useMemo(
    () => (user ? `users/${user.uid}/messages` : `guests/${guestId}/messages`),
    [user, guestId]
  );

  // Send a message to the bot handler
  const { execute, data, loading, error } = useLoadingPromise(
    async (message: string) => {
      await addMessage(message, "user");
      return handleGemini(messages, message);
    }
  );

  const addMessage = useCallback(
    async (message: string, origin: "user" | "bot") => {
      const newMessage: Message = {
        id: uuidv4(),
        origin,
        message,
        postedAt: new Date().toISOString(),
      };
      try {
        if (saveMessagesFailed) {
          throw new Error("Failed to save messages"); // skip saving
        }
        await addDoc(collection(db, collectionPath), newMessage);
      } catch (error) {
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, newMessage];
          // fist time failure, notify the user
          if (origin === "user" && !saveMessagesFailed) {
            newMessages.push({
              id: uuidv4(),
              origin: "bot",
              message:
                "I'm sorry, I will not be able to save the chat history for this session.\nHowever I will answer your questions.",
              postedAt: new Date().toISOString(),
            });
          }
          setSaveMessagesFailed(true);
          return newMessages;
        });
      }
    },
    [collectionPath, saveMessagesFailed]
  );

  useEffect(() => {
    const q = query(collection(db, collectionPath), orderBy("postedAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const loadedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        loadedMessages.push(doc.data() as Message);
      });
      setMessages(loadedMessages);
    });
    return () => unsubscribe();
  }, [collectionPath]);

  // Clear all messages from the chat
  const clearMessages = useCallback(async () => {
    const messagesRef = collection(db, collectionPath);
    const querySnapshot = await getDocs(messagesRef);
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    try {
      await Promise.all(deletePromises);
      setMessages([]);
    } catch (error) {
      addMessage("I'm sorry, I couldn't clear the chat.", "bot");
    }
  }, [collectionPath]);

  useUpdateEffect(() => {
    if (data) {
      addMessage(data, "bot");
    }
  }, [data]);

  useUpdateEffect(() => {
    if (error) {
      addMessage("I'm sorry, I couldn't understand that.", "bot");
    }
  }, [error]);

  const scrollChatToBottom = () => {
    setTimeout(() => {
      document.getElementById("chat-content")?.scrollTo({
        top: document.getElementById("chat-content")?.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  useUpdateEffect(() => {
    scrollChatToBottom();
  }, [messages]);

  return {
    messages,
    addMessage,
    sendMessageToBot: execute,
    loadingResponse: loading,
    clearMessages,
  };
};
