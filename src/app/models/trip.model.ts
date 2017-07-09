export interface ITrip {
  uuid: string;
  passengerUsername: string;
  driverUsername: string;
  tripDate: string;
  startTime?: string;
  endTime?: string;
  source?: string;
  destination?: string;
  cost: string;
  cash_payment?: string;
  credit_payment?: string;
  rate?: string;
  state?: string;
  operator?: string;
  subuser?: string;
  voucher?: string;
}
