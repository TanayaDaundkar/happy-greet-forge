
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle, KeyRound } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <KeyRound className="h-5 w-5 text-primary" />
          <CardTitle>OpenAI API Key</CardTitle>
        </div>
        <CardDescription>
          Enter your OpenAI API key to fetch AI news updates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-amber-50 text-amber-800 p-4 rounded-md flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Security Notice</p>
            <p className="text-sm mt-1">
              Your API key will be stored only in your browser's local storage and used only for fetching AI news. 
              Never share your API key or paste it in public places.
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
            You can get your API key from the <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI dashboard</a>.
          </p>
        </div>
        
        <Button onClick={handleSave} className="w-full">
          Save & Fetch Updates
        </Button>
      </CardContent>
    </Card>
  );
}
