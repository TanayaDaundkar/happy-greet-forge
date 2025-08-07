
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface EmptyStateProps {
  onRefresh: () => void;
}

export function EmptyState({ onRefresh }: EmptyStateProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <CardTitle>No Summary Found in Firebase</CardTitle>
        </div>
        <CardDescription>
          We couldn't find any AI summary data in your Firebase Realtime Database.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          To see the AI summary here, add data to your Firebase Realtime Database under the 'summaries/latest' path.
          The data should include 'created_at' and 'summary' fields.
        </p>
        <div className="bg-muted p-3 rounded-md mb-4 text-sm font-mono mt-16">
          <p className="mb-1">Firebase Path: /summaries/latest</p>
          <p className="mb-1">Format:</p>
          <p>{`{`}</p>
          <p>{`  "summaries": {`}</p>
          <p>{`    "latest": {`}</p>
          <p>{`      "created_at": "2025-05-13T08:25:48.234Z",`}</p>
          <p>{`      "summary": "**Daily AI News Update** 1. Artificial Intelligence..."`}</p>
          <p>{`    }`}</p>
          <p>{`  }`}</p>
          <p>{`}`}</p>
        </div>
        <Button onClick={onRefresh}>Refresh Now</Button>
      </CardContent>
    </Card>
  );
}
