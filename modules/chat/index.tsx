"use client";
import { useState } from "react";
import { ChatWidget } from "./ChatWidget";
import { ChatButton } from "./ChatButton";

export const Chat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div>
      <ChatWidget
        isChatOpen={isChatOpen}
        handleClose={() => setIsChatOpen(false)}
      />
      <ChatButton onClick={() => setIsChatOpen(true)} isChatOpen={isChatOpen} />
    </div>
  );
};
