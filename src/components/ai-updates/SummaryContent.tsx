// components/ai-updates/SummaryContent.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/types/aiUpdates";
import React from "react";

interface SummaryContentProps {
  newsItems: NewsItem[];
}

// Utility to format published date safely
function formatPublishedDate(
  published: Date | { seconds: number } | string | undefined
): string {
  if (!published) return "Unknown";

  let date: Date;

  // If Firestore Timestamp object
  if (typeof published === "object" && "seconds" in published) {
    date = new Date(published.seconds * 1000);
  }
  // If JS Date or string
  else {
    date = published instanceof Date ? published : new Date(published);
  }

  if (isNaN(date.valueOf())) return "Unknown";

  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function SummaryContent({ newsItems }: SummaryContentProps) {
  if (!newsItems.length) return null;

  return (
    <div className="container mx-auto px-4 py-16 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => {
          const validImage =
            typeof item.image === "string" && item.image.trim() !== "" ? item.image : null;

          return (
            <Card
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {validImage && (
                <img
                  src={validImage}
                  alt={item.title || "News image"}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              )}

              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-xl font-semibold text-[#1e1e1e] mb-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.title || "AI News Update"}
                  </a>
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {formatPublishedDate(item.published)} |{" "}
                  <span className="italic">{item.source || "Unknown Source"}</span>
                </p>
              </CardHeader>
              {/* No summary shown */}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
