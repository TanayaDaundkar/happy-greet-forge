import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FetchSummaryButtonProps {
  loading: boolean;
  onFetch: () => void;
}

export function FetchSummaryButton({ loading, onFetch }: FetchSummaryButtonProps) {
  return (
    <Button
      onClick={onFetch}
      disabled={loading}
      className="gap-2 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] hover:opacity-90 text-white"
    >
      <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
      {loading ? "Loading..." : "Refresh Updates"}
    </Button>
  );
}
