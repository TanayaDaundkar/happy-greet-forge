
import React, { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./ChatMessage";
import { toast } from "@/hooks/use-toast";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface AssessmentChatProps {
  messages: Message[];
  isLoading: boolean;
  apiKey: string;
  assessmentPrompt: string;
  onMessagesUpdate: (messages: Message[]) => void;
}

export function AssessmentChat({ 
  messages, 
  isLoading, 
  apiKey, 
  assessmentPrompt,
  onMessagesUpdate 
}: AssessmentChatProps) {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    onMessagesUpdate([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            { role: "system", content: assessmentPrompt },
            ...messages.map(msg => ({ 
              role: msg.role,
              content: msg.content 
            })),
            { role: "user", content: input },
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to get response");
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;

      onMessagesUpdate([...messages, userMessage, { role: "assistant" as const, content: assistantMessage }]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please check your API key and try again.",
        variant: "destructive",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="flex-1 overflow-auto p-4 border rounded-md my-4 bg-muted/30 max-h-[60vh]">
        {messages.length === 0 && isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-2">Starting assessment...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-muted text-foreground">
                  <div className="flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your response..."
          className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={isLoading}
        />
        <Button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          size="icon"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </>
  );
}
