
import React, { useRef, useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useChat } from "@/contexts/ChatContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const ChatWidget: React.FC = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-14 w-14 z-50 bg-black dark:bg-white text-white dark:text-black"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-[400px] p-0 flex flex-col h-full border-l border-white/10 dark:border-black/10 bg-white dark:bg-black">
          <SheetHeader className="p-4 border-b border-gray-200 dark:border-gray-800">
            <SheetTitle className="flex justify-between items-center text-black dark:text-white">
              <span>Autox24 Assistant</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  clearMessages();
                }}
                className="hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                New Chat
              </Button>
            </SheetTitle>
          </SheetHeader>
          
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                <span>Assistant is typing</span>
                <span className="dotFlashing"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChatWidget;
