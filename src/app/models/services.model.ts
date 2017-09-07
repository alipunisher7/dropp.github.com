export interface IServices {
  status: string;
  type: string;
  id: number;
}

export class Services implements IServices {
  status: string;
  type: string;
  id: number;
  private typeNames = {
    "T": "Taxi",
    "E": "Eco",
    "N": "Normal",
    "L": "Lux",
    "R": "Motor-Transport",
    "D": "Motor-Delivery",
    "S": "SUV"
  }

  private statusNames = {
    "false": "غیرفعال",
    "true": "فعال"
  }

  get typeName() {
    return this.typeNames[this.type];
  }

  get statusName() {
    return this.statusNames[this.status];
  }

  constructor(services: IServices) {
    this.status = services.status;
    this.type = services.type;
    this.id = services.id;
  }
}
