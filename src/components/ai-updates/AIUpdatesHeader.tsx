
import { Newspaper } from "lucide-react";

export function AIUpdatesHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 mb-12">
      <div className="bg-primary/10 p-3 rounded-full mb-4">
        <Newspaper className="h-10 w-10 text-primary" />
      </div>
      {/* <h1 className="text-3xl font-bold mb-4" style={{ color: "#036D9B" }}>
  AI Updates Agent
</h1> */}

      <p className="text-muted-foreground max-w-xl">
        Stay up-to-date with the latest developments in artificial intelligence,
        machine learning, and related technologies.
      </p>
    </div>
  );
}
