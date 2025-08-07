
import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { fetchNewsFromOpenAI } from "@/services/openaiService";
import { NewsItem, AIUpdatesState } from "@/types/aiUpdates";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LOCALSTORAGE_API_KEY, sampleNewsItems } from "@/config/aiUpdates";

export function useAIUpdates() {
  const [state, setState] = useState<AIUpdatesState>({
    loading: false,
    error: null,
    newsItems: null,
    useSampleData: false
  });
  
  const [apiKey, setApiKeyValue] = useLocalStorage<string>(LOCALSTORAGE_API_KEY, "");
  const { toast } = useToast();

  // Save API key to localStorage
  const saveApiKey = useCallback((key: string) => {
    setApiKeyValue(key);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved to your browser.",
    });
  }, [toast, setApiKeyValue]);

  // Main function to fetch AI updates
  const fetchSummary = async () => {
    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
      newsItems: null,
      useSampleData: false
    }));
    
    try {
      console.log("Fetching AI news from OpenAI...");
      
      // Check if API key is available
      if (!apiKey) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: "OpenAI API key is required. Please enter your API key to fetch updates."
        }));
        return;
      }
      
      const newsItems = await fetchNewsFromOpenAI(apiKey);
      
      setState(prev => ({
        ...prev,
        loading: false,
        newsItems
      }));
      
      toast({
        title: "News Updated",
        description: "Successfully loaded the latest AI news.",
      });
    } catch (err) {
      console.error("Fetch error:", err);
      const errorMessage = err instanceof Error 
        ? (err.name === 'AbortError' ? 'Request timed out. The server might be slow or unavailable.' : err.message) 
        : "An unknown error occurred";
      
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage
      }));
      
      toast({
        title: "Error",
        description: `Failed to fetch AI updates: ${errorMessage}`,
        variant: "destructive",
      });
    }
  };

  const setUseSampleData = useCallback((value: boolean) => {
    setState(prev => ({
      ...prev,
      useSampleData: value
    }));
  }, []);

  const setApiKey = useCallback((key: string) => {
    setApiKeyValue(key);
  }, [setApiKeyValue]);

  return {
    loading: state.loading,
    error: state.error,
    newsItems: state.newsItems,
    fetchSummary,
    useSampleData: state.useSampleData,
    setUseSampleData,
    apiKey,
    setApiKey,
    saveApiKey
  };
}
