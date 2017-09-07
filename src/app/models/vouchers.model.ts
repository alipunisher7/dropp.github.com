export class Location {
  lng: string;
  lat: string;
  placeName: string;
  tolerance: string;
}
export interface IVouchers {
  maxUse?: string;
  code: string;
  generationType: string;
  discountType: string;
  creatorUsername: string;
  description?: string;
  expireAt?: string;
  id: string;
  used: string;
  creationDate: string;
  discountValue: string;
  startAt: string;
  cityLimit?: string;
  discountLimit?: string;
  tripType?: string;
  serviceType?: string;
  origin?: Location;
  dest?: Location;

}
export class Vouchers implements IVouchers {
  maxUse?: string;
  code: string;
  generationType: string;
  discountType: string;
  creatorUsername: string;
  description?: string;
  expireAt?: string;
  id: string;
  used: string;
  creationDate: string;
  discountValue: string;
  startAt: string;
  cityLimit?: string;
  discountLimit?: string;
  tripType?: string;
  serviceType?: string;
  origin?: Location;
  dest?: Location;


  generationTypeNames = {
    "A": "خودکار",
    "M": "دستی",
  }
  discountTypeNames = {
    "P": "درصد",
    "A": "مبلغ"
  }
  tripTypeNames = {
    "I": "درون شهری",
    "O": "برون شهری",
    "U": "بدون محدودیت",
  }
  serviceTypeNames = {
    "E": "Eco",
    "L": "Lux",
    "N": "Normal",
    "R": "Motor-Transport",
    "D": "Motor-Delivery",
    "T": "Taxi",
    "S": "SUV",
  }
  get generationTypeName() {
    return this.generationTypeNames[this.generationType];
  }
  get discountTypeName() {
    return this.discountTypeNames[this.discountType];
  }
  get tripTypeName() {
    return this.tripTypeNames[this.tripType];
  }
  get serviceTypeName() {
    return this.serviceTypeNames[this.serviceType];
  }
  constructor(vouchers: IVouchers) {
    this.maxUse = vouchers.maxUse;
    this.code = vouchers.code;
    this.generationType = vouchers.generationType;
    this.discountType = vouchers.discountType;
    this.creatorUsername = vouchers.creatorUsername;
    this.description = vouchers.description;
    this.expireAt = vouchers.expireAt
    this.id = vouchers.id;
    this.used = vouchers.used;
    this.creationDate = vouchers.creationDate;
    this.discountValue = vouchers.discountValue;
    this.startAt = vouchers.startAt;
    this.cityLimit = vouchers.cityLimit;
    this.discountLimit = vouchers.discountLimit;
    this.tripType = vouchers.tripType;
    this.serviceType = vouchers.serviceType;
    this.origin = vouchers.origin;
    this.dest = vouchers.dest;
  }
}
