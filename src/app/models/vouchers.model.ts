export interface IVouchers {
  maxUses: string;
  code: string;
  generationType: string;
  voucherType: string;
  creatorUsername: string;
  description: string;
  expireDate: string;
  id: string;
  used: string;
  creationDate: string;
  discountValue: string;
  startDate: string;
}
export class Vouchers implements IVouchers {
  maxUses: string;
  code: string;
  generationType: string;
  voucherType: string;
  creatorUsername: string;
  description: string;
  expireDate: string;
  id: string;
  used: string;
  creationDate: string;
  discountValue: string;
  startDate: string;

  generationTypeNames = {
    "A": "خودکار",
    "M": "دستی",
  }
  voucherTypeNames = {
    "P": "درصد",
    "A": "مبلغ"
  }
  get generationTypeName() {
    return this.generationTypeNames[this.generationType];
  }
  get voucherTypeName() {
    return this.voucherTypeNames[this.voucherType];
  }
  constructor(vouchers: IVouchers) {
    this.maxUses = vouchers.maxUses;
    this.code = vouchers.code;
    this.generationType = vouchers.generationType;
    this.voucherType = vouchers.voucherType;
    this.creatorUsername = vouchers.creatorUsername;
    this.description = vouchers.description;
    this.expireDate = vouchers.expireDate
    this.id = vouchers.id;
    this.used = vouchers.used;
    this.creationDate = vouchers.creationDate;
    this.discountValue = vouchers.discountValue;
    this.startDate = vouchers.startDate;
  }
}
