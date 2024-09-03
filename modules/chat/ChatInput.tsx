import React, { useState, useRef, useEffect } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
}) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
    setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur();
    }, 100);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-white rounded-b-lg">
      <div className="relative border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent transition-all duration-300 ease-in-out">
        <textarea
          ref={textareaRef}
          className="w-full p-3 pr-12 border-none focus:outline-none resize-none bg-transparent"
          rows={1}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ minHeight: "44px", maxHeight: "120px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          className="absolute right-2 bottom-2 bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
          aria-label="Send message"
          disabled={isLoading}
        >
          {!isLoading ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          ) : (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};
