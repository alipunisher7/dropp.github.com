interface ICardInfo {
  title: string;
  data?: any;
}

export class Card {

  constructor(public info1: ICardInfo, public info2: ICardInfo, public route: string) {
    this.info1.data = this.info1.data;
    this.info2.data = this.info2.data;
  }

}
