export interface IManufacture {
  id?: String;
  name: String;
}

export class Manufacture {
  id?: String;
  name: String;

  constructor(manufacture: IManufacture) {
    this.id = manufacture.id;
    this.name = manufacture.name;
  }
}
