export interface ITariff {
  id?: string;
  tariffID?: string;
  city?: string;
  serviceType?: string;
  before2KM: string;
  after2KM: string;
  perMin: string;
  waitingMin: string;
  entrance: string;
  twoWayCost: string;
  genoShare: string;
}
export class Tariff implements ITariff {
  id?: string;
  tariffID?: string;
  city?: string;
  serviceType?: string;
  before2KM: string;
  after2KM: string;
  perMin: string;
  waitingMin: string;
  entrance: string;
  twoWayCost: string;
  genoShare: string;
  private cityNames = {
    "GO": "گرگان",
    "TE": "تهران",
    "IS": "اصفهان",
    "MA": "مشهد",
  }
  private serviceTypeNames = {
    "N": "نرمال",
    "T": "تاکسی",
    "D": "پیک",
    "R": "موتور",
    "L": "لوکس",
    "S": "SUV",
    "E": "اکو",
  }
  get cityName() {
    return this.cityNames[this.city];
  }
  get serviceTypeName() {
    return this.serviceTypeNames[this.serviceType];
  }
  constructor(tariff: ITariff) {
    this.id = tariff.id;
    this.tariffID = tariff.tariffID;
    this.serviceType = tariff.serviceType;
    this.city = tariff.city;
    this.before2KM = tariff.before2KM;
    this.after2KM = tariff.after2KM;
    this.perMin = tariff.perMin;
    this.waitingMin = tariff.waitingMin;
    this.entrance = tariff.entrance;
    this.twoWayCost = tariff.twoWayCost;
    this.genoShare = tariff.genoShare;
  }

}
