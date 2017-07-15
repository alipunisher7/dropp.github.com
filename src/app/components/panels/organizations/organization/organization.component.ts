import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services'
import { IOrganization } from 'models'

@Component({
  selector: 'ts-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationsComponent implements OnInit {
  searchStr: string;
  OrganizationInfo: IOrganization[];

  constructor(private _operatorservice: OperatorService) { }

  searchOrganization() {
    this._operatorservice
      .getOrganizations()
      .subscribe(res => this.OrganizationInfo = res);
  }

  ngOnInit() {
  }

  OnSearch() {
    this.searchOrganization();
  }
}
