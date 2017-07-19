import { Device } from './device.model';
import { User, IUser } from './user.model';

export interface IPassenger extends IUser {
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: Device;
  registrationDate?: string;
  status?: string;
}

export class Passenger extends User {
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: Device;
  registrationDate?: string;
  status?: string;

  constructor(passenger: IPassenger) {
    super(passenger);
    this.credit = passenger.credit;
    this.tripCount = passenger.tripCount;
    this.stateCode = passenger.stateCode;
    this.device = passenger.device || new Device();
    this.registrationDate = passenger.registrationDate;
    this.status = passenger.status;
  }
}

export interface ISearchPassenger {
  username: string;
  credit: string;
  tripCount: string;
  status: string;
}
