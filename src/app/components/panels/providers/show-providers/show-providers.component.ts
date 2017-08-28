import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { IServiceProviders } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-show-providers',
  templateUrl: './show-providers.component.html',
  styleUrls: ['./show-providers.component.scss']
})
export class ShowProvidersComponent implements OnInit {
  serviceProviders: IServiceProviders[];
  constructor(private _operatorservice: OperatorService, private router: Router,
    private route: ActivatedRoute) { }
  // getProviders() {
  //   this._operatorservice.getProviders().subscribe(res => this.serviceProviders = res);
  // }
  ngOnInit() {
    // this.getProviders();
    this.serviceProviders = this.route.snapshot.data['serviceProviders'];
  }

}
