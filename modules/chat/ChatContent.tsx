import { ChatBubble } from "./ChatBubble";
import { Message } from "@/services/chatbot";

interface ChatContentProps {
  messages: Message[];
}

export const ChatContent: React.FC<ChatContentProps> = ({ messages }) => {
  return (
    <div id="chat-content" className="flex-grow overflow-y-auto p-4">
      {messages.map((msg) => (
        <ChatBubble
          key={msg.id}
          message={msg.message}
          isUser={msg.origin === "user"}
        />
      ))}
    </div>
  );
};
