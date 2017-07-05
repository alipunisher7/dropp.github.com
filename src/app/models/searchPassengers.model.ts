import {device} from './device.model';
import {PassengerInfo} from'./passengerInfo.model';
export interface IPassengersInfo {
  passengerInfo: PassengerInfo;
  username: string;
  phone?: string;
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: device;
  registrationDate?: string;
}
