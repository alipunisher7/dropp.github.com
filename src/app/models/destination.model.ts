export interface IDestination {
  destId: string;
  lng: string;
  seq: string;
  lat: string;
}
export class Destination {
  destId: string;
  lng: string;
  seq: string;
  lat: string;
  constructor(destination: IDestination) {
    this.destId = destination.destId;
    this.lng = destination.lng;
    this.lat = destination.lat;
    this.seq = destination.seq;
  }
}
