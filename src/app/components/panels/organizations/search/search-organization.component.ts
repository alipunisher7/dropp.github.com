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
  constructor(private _operatorservice: OperatorService, private _notificationservice: NotificationService) { }
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
  confirm(organization) {
    this._operatorservice.confirmOrganizations(organization.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'سازمان مورد نظر تایید شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        organization.accountState = 'VERIFIED';
      },
      err => {
        alert(err);
      })
  }
  remove(username) {
    this._operatorservice.removeOrganizations(username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'سازمان مورد نظر حذف شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      err => {
        alert(err);
      })
  }
}
