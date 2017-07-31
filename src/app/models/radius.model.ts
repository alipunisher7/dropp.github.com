export interface IRadius {
  serviceType: string;
  radius: string;
}

const serviceTypeNames = {
  "T": "تاکسی",
  "E": "اکو",
  "N": "نرمال",
  "L": "لوکس",
  "S": "SUV",
  "R": "موتور",
  "D": "پیک"
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
