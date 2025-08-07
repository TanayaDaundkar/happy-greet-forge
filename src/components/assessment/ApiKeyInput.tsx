
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  onSave: () => void;
}

export function ApiKeyInput({ apiKey, onApiKeyChange, onSave }: ApiKeyInputProps) {
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onApiKeyChange(e.target.value);
  };

  const handleApiKeyKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSave();
    }
  };

  const handleSave = () => {
    if (apiKey.trim()) {
      onSave();
    } else {
      toast({
        title: "API Key Required",
        description: "Please enter your OpenAI API key to continue.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-amber-50 text-amber-800 p-4 rounded-md flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium">OpenAI API Key Required</p>
          <p className="text-sm mt-1">
            Please enter your OpenAI API key to use the AI assessment feature. 
            Your key will be stored only in your browser's local storage and never sent to our servers.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="api-key" className="text-sm font-medium">
          OpenAI API Key
        </label>
        <Input
          id="api-key"
          type="password"
          value={apiKey}
          onChange={handleApiKeyChange}
          onKeyDown={handleApiKeyKeyDown}
          placeholder="sk-..."
          className="font-mono"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Your API key is only stored locally in your browser.
        </p>
      </div>
      
      <Button onClick={handleSave} className="w-full">
        Start Assessment
      </Button>
    </div>
  );
}
