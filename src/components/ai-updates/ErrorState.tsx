import { AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  const isSupabaseError = error.toLowerCase().includes("supabase") || error.toLowerCase().includes("fetch");

  return (
    <Card className="bg-white border-border">
      <CardHeader>
        <div className="flex items-center gap-2 text-foreground">
          <AlertCircle className="h-5 w-5" />
          <CardTitle>Error Loading Updates</CardTitle>
        </div>
        <CardDescription>
          We encountered a problem while fetching the latest AI updates from Supabase.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Alert
          variant="destructive"
          className="bg-white text-red-600 border border-red-300"
        >
          <AlertDescription className="text-sm whitespace-pre-wrap break-words">
            {error}
          </AlertDescription>
        </Alert>

        <div className="pt-2">
          {isSupabaseError ? (
            <div className="space-y-3">
              <Badge
                variant="outline"
                className="bg-white text-red-600 border-red-300"
              >
                Supabase Error
              </Badge>
              <p className="text-sm text-muted-foreground">
                There seems to be an issue with the Supabase connection. This might be due to:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Incorrect Supabase project URL or API key</li>
                <li>Missing or incorrect `.env` configuration</li>
                <li>Row Level Security (RLS) preventing access to the table</li>
                <li>Network or CORS-related issues</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Please check your Supabase project settings and make sure the database is reachable.
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              This could be a temporary network error or a service interruption. Please try again shortly.
            </p>
          )}
        </div>

        {/* <Button variant="outline" onClick={onRetry} className="mt-4">
          Try Again
        </Button> */}
      </CardContent>
    </Card>
  );
}
