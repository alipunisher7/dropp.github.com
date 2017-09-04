import { Component, OnInit } from '@angular/core';
import { AdminService, NotificationService } from 'services';
import { Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.scss']
})
export class ReloadComponent implements OnInit {

  constructor(private _adminservice: AdminService, private _notificationservice: NotificationService) { }


  onRealoadTarrif() {
    this._adminservice.reloadTarrif().subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'بارگذاری مجدد تعرفه با موفقیت انجام شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error })
        this._notificationservice.notify(notification);
      }
    )
  }
  onReloadSetting() {
    this._adminservice.reloadSetting().subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'بارگذاری مجدد تنظیمات با موفقیت انجام شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }
  onReloadSearchRadius() {
    this._adminservice.reloadsearchRadius().subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'بارگذاری مجدد شعاع جستجو با موفقیت انجام شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }
  onReloadStates() {
    this._adminservice.reloadStates().subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'بارگذاری مجدد شعاع جستجو با موفقیت انجام شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      }
    )
  }
  onReloadTicketSubject() {
    this._adminservice.reloadsearchRadius().subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'بارگذاری مجدد موضوع تیکت ها با موفقیت انجام شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      }
    )
  }

  ngOnInit() {
  }

}
