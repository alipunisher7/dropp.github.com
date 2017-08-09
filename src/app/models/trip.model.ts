import {Destination} from './destination.model';
export class Vehicle {
  manufacture: string;
  color: string;
  name: string;
}
export class Loc {
  originLng: string;
  originLat: string;
}
export class DeliveryInfo {
  id: string;
  desc: string;
  destInfo: string;
  receiverFName: string;
  receiverLName: string;
}
export interface ITrip {
  serviceType?: string;
  loc?: Loc;
  cashPayment?: string;
  cost?: string;
  distance?: string;
  city?: string;
  originAddress?: string;
  driverUsername?: string;
  destinations?: Destination[];
  waitingTime?: string;
  creditPayment?: string;
  vehicle?: Vehicle;
  ETA?: string;
  passengerUsername?: string;
  id?: string;
  UUID?: string;
  startDate?: string;
  rate?: string;
  isOneWay?: string
  operatorUsername?: string;
  subscriptionCode?: string;
  deliveryInfo?: DeliveryInfo;

}
export class Trip implements ITrip {
  serviceType?: string;
  loc?: Loc;
  cashPayment?: string;
  cost?: string;
  distance?: string;
  city?: string;
  originAddress?: string;
  driverUsername?: string;
  destinations?: Destination[];
  waitingTime?: string;
  creditPayment?: string;
  vehicle?: Vehicle;
  ETA?: string;
  passengerUsername?: string;
  id?: string;
  UUID?: string;
  startDate?: string;
  rate?: string;
  isOneWay?: string
  operatorUsername?: string;
  subscriptionCode?: string
  deliveryInfo?: DeliveryInfo;
  isOneWayNames = {
    true: 'بله',
    false: 'خیر'
  }
  get isOneWayName() {
    return this.isOneWayNames[this.isOneWay];
  }
  constructor(trip: ITrip) {
    this.serviceType = trip.serviceType;
    this.loc = trip.loc;
    this.cashPayment = trip.cashPayment;
    this.cost = trip.cost;
    this.distance = trip.distance;
    this.city = trip.city;
    this.originAddress = trip.originAddress;
    this.driverUsername = trip.driverUsername;
    this.destinations = trip.destinations;
    this.waitingTime = trip.waitingTime;
    this.creditPayment = trip.creditPayment;
    this.vehicle = trip.vehicle;
    this.ETA = trip.ETA;
    this.passengerUsername = trip.passengerUsername;
    this.id = trip.id;
    this.UUID = trip.UUID;
    this.startDate = trip.startDate;
    this.rate = trip.rate;
    this.operatorUsername = trip.operatorUsername;
    this.isOneWay = trip.isOneWay;
    this.subscriptionCode = trip.subscriptionCode;
    this.deliveryInfo = trip.deliveryInfo;
  }
}
