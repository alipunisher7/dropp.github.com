import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import { Coordinate } from 'models';
import {} from '@types/googlemaps';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

type TripRequestState = 'origin' | 'dest';

@Component({
  selector: 'ts-send-taxi',
  templateUrl: './send-taxi.component.html',
  styleUrls: ['./send-taxi.component.scss'],
  host: {
    class: 'panel'
  }
})
export class SendTaxiComponent implements OnInit {
  mapCoordinate: Coordinate;
  currentCoordinate: Coordinate;
  origin: Coordinate;
  dest: Coordinate;
  zoom: number;
  state: TripRequestState;
  mapDown: boolean;
  private centerChanged = new Subject<string>();

  @ViewChild("search")
  public searchElementRef: ElementRef;
  searchStr: string;

  orgIconUrl = "/assets/images/origin.svg";
  destIconUrl = "/assets/images/dest.svg";

  constructor(private _mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.state = 'origin';
  }

  ngOnInit() {
    this.mapCoordinate = new Coordinate({ lng: 51.404343, lat: 35.715298 });
    this.zoom = 15;

    const observable = this.centerChanged
      .debounceTime(400)
      .subscribe(this.onCenterChange);

    this._mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        console.log('Changed: ');
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.mapCoordinate.lat = place.geometry.location.lat();
          this.mapCoordinate.lng = place.geometry.location.lng();
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapCoordinate.lat = position.coords.latitude;
        this.mapCoordinate.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onOrgDragEnd(e) {
    this.origin.lat = e.coords.lat;
    this.origin.lng = e.coords.lng;
  }

  onDestDragEnd(e) {
    this.dest.lat = e.coords.lat;
    this.dest.lng = e.coords.lng;
  }

  onSelectOrigin() {
    console.log('this: ', this);
    console.log('this.currentCoordinate: ', this.currentCoordinate);
    this.origin = this.currentCoordinate;
    console.log('origin: ', this.origin);
  }

  onCenterChange(e) {
    // TODO: Contex binding
    this.currentCoordinate = new Coordinate({ lng: e.lng, lat: e.lat });
    console.log('this.currentCoordinate: ', this.currentCoordinate);
  }
}
