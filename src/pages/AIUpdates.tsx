import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fetchNewsItems } from "@/services/supabaseService";
import { SummaryContent } from "@/components/ai-updates/SummaryContent";
import { LoadingState } from "@/components/ai-updates/LoadingState";
import { ErrorState } from "@/components/ai-updates/ErrorState";
import { EmptyState } from "@/components/ai-updates/EmptyState";
import { NewsItem } from "@/types/aiUpdates";
import { sampleNewsItems } from "@/config/aiUpdates";

export default function AIUpdates() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [useSampleData, setUseSampleData] = useState<boolean>(false);
  const { toast } = useToast();

  const parseDates = (items: any[]): NewsItem[] => {
    return items.map((item) => ({
      ...item,
      published: new Date(item.published),
      fetchedAt: item.fetched_at ? new Date(item.fetched_at) : undefined,
    }));
  };

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    setUseSampleData(false);

    try {
      const news = await fetchNewsItems();
      const parsedNews = parseDates(news);
      setNewsItems(parsedNews);

      if (parsedNews.length === 0) {
        toast({
          title: "No News Found",
          description: "No AI news found. Try adding some data or using sample data.",
        });
      } else {
        toast({
          title: "News Updated",
          description: `Successfully loaded ${parsedNews.length} AI news.`,
        });
      }
    } catch (err) {
      console.error("Supabase fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";

      setError(errorMessage);
      toast({
        title: "Error",
        description: `Failed to fetch AI updates: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    toast({
      title: "Fetching AI News",
      description: "Loading the latest AI updates",
    });

    const interval = setInterval(fetchNews, 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowSampleData = () => {
    setUseSampleData(true);
    setError(null);

    toast({
      title: "Sample Data Loaded",
      description: "Showing sample AI news for demonstration purposes.",
    });
  };

  const itemsToDisplay = useSampleData ? sampleNewsItems : newsItems;

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F9FAFB] to-[#EAF6FA] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-6">
          <div>
            {(error || itemsToDisplay.length === 0) && !useSampleData && (
              <Button
                variant="secondary"
                onClick={handleShowSampleData}
                className="mr-2 bg-[#F57E20] hover:bg-[#e76c0f] text-white"
              >
                Show Sample Data
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {loading ? (
            <LoadingState />
          ) : error && !useSampleData ? (
            <ErrorState error={error} onRetry={fetchNews} />
          ) : itemsToDisplay.length > 0 ? (
            <SummaryContent newsItems={itemsToDisplay} />
          ) : (
            <EmptyState onRefresh={fetchNews} />
          )}
        </div>
      </div>
    </div>
  );
}
