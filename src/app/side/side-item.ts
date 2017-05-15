export interface Link {
  title: string;
  icon: string;
  link: string;
}

export interface SideItem {
  title: string;
  icon: string;
  isOpen: boolean;
  links: Array<Link>;
}
