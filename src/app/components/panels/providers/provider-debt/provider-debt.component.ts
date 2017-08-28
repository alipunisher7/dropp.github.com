import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ts-provider-debt',
  templateUrl: './provider-debt.component.html',
  styleUrls: ['./provider-debt.component.scss']
})
export class ProviderDebtComponent implements OnInit {
  debt: string;
  constructor(private _providerservice: ProviderService, private router: Router,
    private route: ActivatedRoute) { }

  // getproviderclaim() {
  //   this._providerservice.getproviderclaim().subscribe(res => this.debt = res);
  // }

  ngOnInit() {
    // this.getproviderclaim();
    this.debt = this.route.snapshot.data['debt'];
  }

}
