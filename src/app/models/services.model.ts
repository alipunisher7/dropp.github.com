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
    "T": "تاکسی",
    "E": "اکو",
    "N": "نرمال",
    "L": "لوکس",
    "R": "موتور",
    "D": "پیک",
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
