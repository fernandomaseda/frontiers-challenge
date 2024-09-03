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
  const { messages, sendMessageToBot, loadingResponse, clearMessages } =
    useChatBot();

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
        <div className="flex items-center space-x-4">
          <button
            onClick={clearMessages}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Clear chat"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path>
            </svg>
          </button>
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
      </div>
      <ChatContent messages={messages} />
      <ChatInput onSendMessage={sendMessageToBot} isLoading={loadingResponse} />
    </div>
  );
};
