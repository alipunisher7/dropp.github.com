export interface ICoordinate {
  lng: number;
  lat: number;
}

export class Coordinate implements ICoordinate {
  lng: number;
  lat: number;

  constructor(coordinate: ICoordinate) {
    this.lng = coordinate.lng;
    this.lat = coordinate.lat;
  }
}
