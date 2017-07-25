import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {AdminService, NotificationService} from 'services';
import {ISettings, Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.scss']
})
export class SystemSettingComponent implements OnInit {
  settings: ISettings;
  updateForm: FormGroup;

  constructor(private _adminservice: AdminService, private _notificationservice: NotificationService) {
    this.updateForm = new FormGroup({
      'smsSender': new FormControl(''),
      'emailSender': new FormControl(''),
      'androidUpdate': new FormControl(''),
      'androidUpdateCritical': new FormControl(''),
      'IOSUpdate': new FormControl(''),
      'IOSUpdateCritical': new FormControl(''),
      'exceptionOccurrenceSms': new FormControl(''),
      'exceptionOccurrenceEmail': new FormControl(''),
      'dailySmsReport': new FormControl(''),
      'dailyEmailReport': new FormControl(''),
      'weeklySmsReport': new FormControl(''),
      'weeklyEmailReport': new FormControl(''),
      'monthlyEmailReport': new FormControl(''),
      'allowCompetitors': new FormControl(''),

    })
  }
  getSetting() {
    this._adminservice.getSystemSetting().subscribe(res => this.settings = res);
  }

  toggle(setting: string) {
    this.settings[setting] = !this.settings[setting];
    console.log(this.settings);
    this._adminservice.updateSystemSetting(this.settings).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'تغییرات ثبت شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      err => {
        alert(err);
      }
    )
  }

  ngOnInit() {
    this.getSetting();
  }

}
