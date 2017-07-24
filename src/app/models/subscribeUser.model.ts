import {Address} from './address.model';
export interface ISubscribeUser {
  firstName: string;
  lastName: string;
  code: string;
  phoneNumber: string;
  address: Address;

}
export class SubscribeUser implements ISubscribeUser {
  firstName: string;
  lastName: string;
  code: string;
  phoneNumber: string;
  address: Address;
  constructor(subscribeUser: ISubscribeUser) {
    this.firstName = subscribeUser.firstName;
    this.lastName = subscribeUser.lastName;
    this.code = subscribeUser.code;
    this.phoneNumber = subscribeUser.phoneNumber;
    this.address = new Address(subscribeUser.address);
  }
}
