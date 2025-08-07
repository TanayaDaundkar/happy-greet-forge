// aiUpdates.ts
export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  link: string;
  image?: string;
  published: Date;      // ✅ Remove `Timestamp` (Firebase-specific)
  fetchedAt?: Date;     // ✅ Same here
};

export interface AIUpdatesState {
  loading: boolean;
  error: string | null;
  newsItems: NewsItem[] | null;
  useSampleData: boolean;
}
