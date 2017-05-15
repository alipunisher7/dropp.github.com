interface IInfo {
  title: string;
  data?: any;
}

export class Card {

  constructor(public IInfo1: IInfo, public IInfo2: IInfo) {
    this.IInfo1.data = this.IInfo1.data || 0;
    this.IInfo2.data = this.IInfo2.data || 0;

  }
}
