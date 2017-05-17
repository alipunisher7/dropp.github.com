export interface INavItem {
  title: string;
  icon: string;
  isOpen: boolean;
  subNavs?: Array<ISubNavItem>;
  route: string;
}

export interface ISubNavItem {
  title: string;
  icon: string;
  route: string;
}
