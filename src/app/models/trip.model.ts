import {Destination} from './destination.model';
import {Vehicle} from './Vehicle.model';
export interface ITrip {
  serviceType: string;
  cost: string;
  city: string;
  originAddress?: string;
  destinations?: Destination[];
  waitingTime: string;
  cashPayment?: string;
  creditPayment?: string;
  driverUsername: string;
  passengerUsername: string;
  vehicle: Vehicle;
  uuid: string;
  startDate: string;

}
