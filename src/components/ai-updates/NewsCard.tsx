import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { ExternalLink } from "lucide-react";
import { NewsItem } from "@/types/aiUpdates";

interface NewsCardProps {
  newsItem: NewsItem;
}

export function NewsCard({ newsItem }: NewsCardProps) {
  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, "MMMM dd, yyyy");
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-4">
          <h3 className="font-bold text-lg leading-tight line-clamp-3">
            {newsItem.title}
          </h3>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span>{formatDate(newsItem.published)}</span>
              <span>|</span>
              <span className="italic">{newsItem.source}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <a
            href={newsItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            Read more
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}