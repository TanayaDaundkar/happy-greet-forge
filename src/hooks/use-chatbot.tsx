
import { createContext, useContext, useState, ReactNode } from "react";

interface ChatBotContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const ChatBotContext = createContext<ChatBotContextType>({
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
  toggleChat: () => {},
});

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <ChatBotContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
    </ChatBotContext.Provider>
  );
}

export const useChatBot = () => useContext(ChatBotContext);
