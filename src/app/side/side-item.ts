export interface LinkItem {
  title: string;
  icon: string;
  link: string;
}

export interface SideItem {
  title: string;
  icon: string;
  isOpen: boolean;
  route: string;
  subItems?: Array<LinkItem>;
}
