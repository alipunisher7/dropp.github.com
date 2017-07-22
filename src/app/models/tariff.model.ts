export interface ITariff {
  tariffID?: number;
  city?: string;
  serviceType?: string;
  before2KM: string;
  after2KM: string;
  perMin: string;
  waitingMin: string;
  entrance: string;
  twoWayCost: string;
  coShare: string;
}
export class Tariff implements ITariff {
  tariffID?: number;
  city?: string;
  serviceType?: string;
  before2KM: string;
  after2KM: string;
  perMin: string;
  waitingMin: string;
  entrance: string;
  twoWayCost: string;
  coShare: string;
  private cityNames = {
    "GORGAN": "گرگان",
    "TEHRAN": "تهران",
    "ISFAHAN": "اصفهان",
    "MASHHAD": "مشهد",
  }
  private serviceTypeNames = {
    "NORMAL": "نرمال",
    "TAXI": "تاکسی",
    "MOTOR_DELIVERY": "پیک",
    "MOTOR_TRANSPORT": "موتور",
    "LUX": "لوکس",
    "SUV": "SUV",
    "ECO": "اکو",
  }
  get cityName() {
    return this.cityNames[this.city];
  }
  get serviceTypeName() {
    return this.serviceTypeNames[this.serviceType];
  }
  constructor(tariff: ITariff) {
    this.tariffID = tariff.tariffID;
    this.serviceType = tariff.serviceType;
    this.city = tariff.city;
    this.before2KM = tariff.before2KM;
    this.after2KM = tariff.after2KM;
    this.perMin = tariff.perMin;
    this.waitingMin = tariff.waitingMin;
    this.entrance = tariff.entrance;
    this.twoWayCost = tariff.twoWayCost;
    this.coShare = tariff.coShare;
  }

}
