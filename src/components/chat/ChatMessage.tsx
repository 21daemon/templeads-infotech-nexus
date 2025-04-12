
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import type { ChatMessage as ChatMessageType } from "@/contexts/ChatContext";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-2 py-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 bg-black dark:bg-white text-white dark:text-black border border-transparent">
          <span className="text-xs">AX</span>
        </Avatar>
      )}
      
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] shadow-sm",
          isUser
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
        )}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 bg-gray-200 dark:bg-gray-700 text-black dark:text-white border border-transparent">
          <span className="text-xs">You</span>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
