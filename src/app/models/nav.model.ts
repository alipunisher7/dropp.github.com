export interface INavItem {
  title: String;
  icon: String;
  isOpen: Boolean;
  subNavs?: Array<ISubNavItem>;
  route: String;
}

export interface ISubNavItem {
  title: String;
  icon: String;
  route: String;
}
