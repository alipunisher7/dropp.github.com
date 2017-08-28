import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from 'services';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from 'models';

@Component({
  selector: 'ts-online-driver',
  templateUrl: './online-driver.component.html',
  styleUrls: ['./online-driver.component.scss']
})
export class OnlineDriverComponent implements OnInit {

  drivers: Driver[];

  constructor(private _operatorServices: OperatorService, private router: Router,
    private route: ActivatedRoute) { }


  // getOnlineDrivers() {
  //   this._operatorServices.getOnlineDrivers().subscribe(drivers => {
  //     this.drivers = drivers;
  //   })
  // }

  ngOnInit() {
    // this.getOnlineDrivers()
    this.drivers = this.route.snapshot.data['drivers'];
    console.log(this.drivers);
  }
}
