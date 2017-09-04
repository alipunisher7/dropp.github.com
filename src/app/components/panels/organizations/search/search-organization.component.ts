import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { IOrganization, Notification, NotificationTypes, Error } from 'models';

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
    if (confirm('آیا مطمئن هستید؟')) {

      this._operatorservice.confirmOrganizations(organization.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: 'سازمان مورد نظر تایید شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          organization.accountState = 'VERIFIED';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        })
    }
    else {
      alert('کنسل شد');
    }
  }
  remove(organization) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._operatorservice.removeOrganizations(organization.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: 'سازمان مورد نظر حذف شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          let index = this.organizations.indexOf(organization);
          if (index > -1) {
            this.organizations.splice(index, 1);
          }
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        })
    }
    else {
      alert('کنسل شد');
    }
  }
}
