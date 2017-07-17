import {BirthDate} from './birthdate.model'
export interface IOperator {
  accountState?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  workNumber?: string;
  username: string;
  city?: string;
  email?: string;
  birth_day?: BirthDate;
}
