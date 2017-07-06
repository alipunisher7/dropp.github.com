import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services'
import { IOrganization } from '../../../../models'

@Component({
  selector: 'ts-view-organizations',
  templateUrl: './view-organizations.component.html',
  styleUrls: ['./view-organizations.component.scss']
})
export class ViewOrganizationsComponent implements OnInit {
  searchStr: string;
  OrganizationInfo: IOrganization[];

  constructor(private _operatorservice: OperatorService) { }

  searchOrganization() {
    this._operatorservice.viewAllOrganizations(this.searchStr).subscribe(res => this.OrganizationInfo = res);
  }

  ngOnInit() {
  }

  OnSearch() {
    this.searchOrganization();
  }
}
