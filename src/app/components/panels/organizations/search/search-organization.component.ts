import { Component, OnInit } from '@angular/core';
import {OperatorService, NotificationService} from 'services';
import {IOrganization, Notification, NotificationTypes}  from 'models';

@Component({
  selector: 'ts-search-organization',
  templateUrl: './search-organization.component.html',
  styleUrls: ['./search-organization.component.scss']
})
export class SearchOrganizationComponent implements OnInit {
  query: string = '';
  organizations: IOrganization[];
  selectedOrganization: IOrganization;
  resultCount = 20;
  page = 0;
  constructor(private _operatorservice: OperatorService) { }
  searchOrganizations() {
    // TODO: count and prefix
    this._operatorservice.searchOrganizations({ query: this.query, count: this.resultCount, offset: this.page }).subscribe(res => this.organizations = res);
  }
  ngOnInit() {
    this.searchOrganizations();
  }
  OnSearch() {
    this.searchOrganizations();
  }
  onMoreClick(data) {
    this.selectedOrganization = data;
  }
}
