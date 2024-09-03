import React, { useState } from "react";
import { ChatContent } from "./ChatContent";
import { ChatInput } from "./ChatInput";
import clsx from "clsx";
import { Message, useChatBot } from "@/services/chatbot";
import { v4 as uuidv4 } from "uuid";

interface ChatWidgetProps {
  isChatOpen: boolean;
  handleClose: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isChatOpen,
  handleClose,
}) => {
  const { messages, addMessage, sendMessageToBot, loadingResponse } =
    useChatBot();

  const handleSendMessage = (message: string) => {
    addMessage(message, "user");
    sendMessageToBot(message);
  };

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 w-[400px] h-[600px] max-h-[999px] z-50 transition-all duration-500 ease bg-white rounded-lg shadow-xl flex flex-col",
        {
          "!opacity-0 !max-h-0": !isChatOpen,
        }
      )}
    >
      <div className="bg-secondary text-white p-4 rounded-t-lg flex justify-between items-center border-b border-solid border-white">
        <h2 className="text-lg font-bold">Chat Support</h2>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close chat"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ChatContent messages={messages} />
      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={loadingResponse}
      />
    </div>
  );
};
