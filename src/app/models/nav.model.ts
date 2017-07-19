export interface INavItem extends INav {
  isOpen?: boolean;
}

export interface INav {
  title: string;
  icon: string;
  route: string;
  subNavs?: Array<INav>;
}
