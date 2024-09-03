import { useLoadingPromise } from "@/utils/useLoadingPromise";
import useUpdateEffect from "@/utils/useUpdateEffect";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GoogleGenerativeAI } from "@google/generative-ai";

const handleGemini = async (text: string) => {
  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    throw new Error("NEXT_PUBLIC_GEMINI_API_KEY is required");
  }
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(text);
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

  const { execute, data, loading, error, submitted, reset } = useLoadingPromise<
    string,
    string
  >(async (message: string) => {
    return handleGemini(message);
  });

  const addMessage = useCallback(
    (message: string, origin: "user" | "bot") => {
      const newMessage: Message = {
        id: uuidv4(),
        origin,
        message,
        postedAt: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

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
    submittedMessige: submitted,
  };
};
