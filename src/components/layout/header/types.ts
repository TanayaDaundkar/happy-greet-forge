
export interface MenuItem {
  title: string;
  path: string;
  submenu?: { title: string; path: string; description?: string }[];
}
