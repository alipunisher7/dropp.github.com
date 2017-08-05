import { Component, OnInit } from '@angular/core';
import {ProviderService } from 'services';

@Component({
  selector: 'ts-provider-debt',
  templateUrl: './provider-debt.component.html',
  styleUrls: ['./provider-debt.component.scss']
})
export class ProviderDebtComponent implements OnInit {
  debt: string;
  constructor(private _providerservice: ProviderService) { }

  getproviderclaim() {
    this._providerservice.getproviderclaim().subscribe(res => this.debt = res);
  }

  ngOnInit() {
    this.getproviderclaim();
  }

}
