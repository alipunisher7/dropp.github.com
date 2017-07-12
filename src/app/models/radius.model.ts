export class Radius {
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
  get status() {
    return this.serviceTypeNames[this.serviceType];
  }
}
