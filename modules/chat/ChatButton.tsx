import { memo } from "react";
import clsx from "clsx";

interface ChatButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isChatOpen: boolean;
}

export const ChatButton: React.FC<ChatButtonProps> = memo(
  ({ isChatOpen, ...props }) => {
    return (
      <button
        className={clsx(
          "fixed bottom-6 right-6 w-16 h-16 bg-secondary text-white text-base md:text-lg font-bold rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 active:outline-none active:ring-2 active:ring-secondary active:ring-opacity-75",
          {
            "opacity-0": isChatOpen,
          }
        )}
        aria-label="Open chat"
        {...props}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    );
  }
);
