export interface IRadius {
  serviceType: string;
  radius: string;
}

const serviceTypeNames = {
  "T": "Taxi",
  "E": "Eco",
  "N": "Normal",
  "L": "Lux",
  "S": "SUV",
  "R": "Motor-Transport",
  "D": "Motor-Delivery"
}

export class Radius implements IRadius {
  serviceType: string;
  radius: string;

  get type() {
    return serviceTypeNames[this.serviceType];
  }

  constructor(radius: IRadius) {
    this.serviceType = radius.serviceType;
    this.radius = radius.radius;
  }
}
