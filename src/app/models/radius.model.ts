export interface IRadius {
  serviceType: string;
  radius: string;
}

export class Radius implements IRadius {
  serviceType: string;
  radius: string;
  serviceTypeNames = {
    "T": "تاکسی",
    "E": "اکو",
    "N": "نرمال",
    "L": "لوکس",
    "S": "SUV",
    "R": "موتور",
    "D": "پیک"
  }
  get type() {
    return this.serviceTypeNames[this.serviceType];
  }

  constructor(radius: IRadius) {
    this.serviceType = radius.serviceType;
    this.radius = radius.radius;
  }
}
