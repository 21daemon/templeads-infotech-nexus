
import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
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
        <Avatar className="h-8 w-8 bg-gradient-to-br from-primary/80 to-primary border-2 border-primary/20">
          <AvatarFallback className="bg-gradient-to-br from-primary/80 to-primary text-background">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
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
        <Avatar className="h-8 w-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-600">
          <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
