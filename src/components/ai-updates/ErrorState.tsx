
import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  // Check if it's a Firebase error
  const isFirebaseError = error.includes("Firebase") || 
                          error.includes("database") ||
                          error.includes("permission_denied");
  
  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <CardTitle>Error Loading Updates</CardTitle>
        </div>
        <CardDescription>
          We encountered a problem while fetching the latest AI updates from Firebase.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="destructive">
          <AlertDescription className="text-sm whitespace-pre-wrap break-words">
            {error}
          </AlertDescription>
        </Alert>
        <div className="pt-2">
          {isFirebaseError ? (
            <div className="space-y-3">
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                Firebase Database Error
              </Badge>
              <p className="text-sm text-muted-foreground">
                There seems to be an issue with the Firebase Realtime Database connection. This could be due to:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Firebase database rules restricting access</li>
                <li>Incorrect database path (should be '/news')</li>
                <li>Network connectivity issues</li>
                <li>Database URL configuration problems</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Please check your Firebase console and database configuration.
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-4">
              This could be due to network connectivity issues or the Firebase service being temporarily unavailable.
              Please try again in a few moments.
            </p>
          )}
        </div>
        <Button 
          variant="outline" 
          onClick={onRetry} 
          className="mt-4"
        >
          Try Again
        </Button>
      </CardContent>
    </Card>
  );
}
