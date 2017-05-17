import { Component } from '@angular/core';

@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  driverInfoInputs1 = [
    { name: 'ali', email: 'alizandy@gmail.co', phone: '0911111111', carInfo: '88888888888' }
  ]
  constructor() {

  }
}
