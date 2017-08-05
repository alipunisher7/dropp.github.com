export interface IDestination {
  destId: string;
  lng?: string;
  seq: string;
  lat?: string;
  address: string;
}
export class Destination {
  destId: string;
  lng?: string;
  seq: string;
  lat?: string;
  address: string;
  constructor(destination: IDestination) {
    this.destId = destination.destId;
    this.lng = destination.lng;
    this.lat = destination.lat;
    this.seq = destination.seq;
    this.address = destination.address;
  }
}
