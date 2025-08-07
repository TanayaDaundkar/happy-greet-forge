
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
              <span>Stay informed about cutting-edge AI research</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
              <span>Track industry trends and breakthroughs</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">✓</span>
              <span>Understand the implications for businesses and society</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Our AI Updates are compiled from reputable sources including:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">•</span>
              <span>Leading AI research publications</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">•</span>
              <span>Technology news outlets</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/10 p-1 rounded mr-2 mt-0.5">•</span>
              <span>Official company announcements</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
