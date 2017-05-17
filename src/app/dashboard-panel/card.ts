interface IInfo {
  title: string;
  data?: any;
}

export class Card {

  constructor(public info1: IInfo, public info2: IInfo, public link: string) {
    this.info1.data = this.info1.data || 0;
    this.info2.data = this.info2.data || 0;

  }
}
