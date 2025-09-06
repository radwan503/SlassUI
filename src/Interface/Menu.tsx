export interface MenuItem {
  title: string;
  icon?: any;
  path?: string;
  children?: { title: string; path: string }[];
}