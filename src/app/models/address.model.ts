export interface IAddress {
  city: string;
  postalCode?: string;
  state: string;
  line1: string;
  line2?: string;
}

export class Address implements IAddress {
  city: string;
  postalCode?: string;
  state: string;
  line1: string;
  line2?: string;

  toString() {
    if (this.line2) {

      return `${this.state} - ${this.city} - ${this.line1} ${this.line2} `;
    }
    else {
      return `${this.state} - ${this.city} - ${this.line1}`;
    }
  }

  constructor(address) {
    this.city = address.city;
    this.postalCode = address.postalCode;
    this.state = address.state;
    this.line1 = address.line1;
    this.line2 = address.line2;
  }
}
