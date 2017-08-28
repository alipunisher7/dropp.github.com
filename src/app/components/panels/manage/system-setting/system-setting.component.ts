import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { ISettings, Notification, NotificationTypes } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.scss']
})
export class SystemSettingComponent implements OnInit {
  settings: ISettings;
  updateForm: FormGroup;
  updateDeviceForm: FormGroup;

  constructor(private _adminservice: AdminService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) {
    this.updateForm = new FormGroup({
      'smsSender': new FormControl(''),
      'emailSender': new FormControl(''),
      // 'androidUpdate': new FormControl(''),
      // 'androidUpdateCritical': new FormControl(''),
      // 'IOSUpdate': new FormControl(''),
      // 'IOSUpdateCritical': new FormControl(''),
      'exceptionOccurrenceSms': new FormControl(''),
      'exceptionOccurrenceEmail': new FormControl(''),
      'dailySmsReport': new FormControl(''),
      'dailyEmailReport': new FormControl(''),
      'weeklySmsReport': new FormControl(''),
      'weeklyEmailReport': new FormControl(''),
      'monthlyEmailReport': new FormControl(''),
      'allowCompetitors': new FormControl(''),
      'PCriticalAndroidUpdate': new FormControl('', Validators.required),
      'PAndroidUpdate': new FormControl('', Validators.required),
      'DCriticalAndroidUpdate': new FormControl('', Validators.required),
      'DAndroidUpdate': new FormControl('', Validators.required),
      'PCriticalIOSUpdate': new FormControl('', Validators.required),
      'PIOSUpdate': new FormControl('', Validators.required),
      'DCriticalIOSUpdate': new FormControl('', Validators.required),
      'DIOSUpdate': new FormControl('', Validators.required),

    })
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
  onUpdate() {
    console.log(this.updateForm.value);
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
    this.settings = this.route.snapshot.data['settings'];
    this.updateForm.controls['PCriticalAndroidUpdate'].setValue(this.settings.PCriticalAndroidUpdate);
    this.updateForm.controls['PAndroidUpdate'].setValue(this.settings.PAndroidUpdate);
    this.updateForm.controls['DCriticalAndroidUpdate'].setValue(this.settings.DCriticalAndroidUpdate);
    this.updateForm.controls['DAndroidUpdate'].setValue(this.settings.DAndroidUpdate);
    this.updateForm.controls['PCriticalIOSUpdate'].setValue(this.settings.PCriticalIOSUpdate);
    this.updateForm.controls['PIOSUpdate'].setValue(this.settings.PIOSUpdate);
    this.updateForm.controls['DCriticalIOSUpdate'].setValue(this.settings.DCriticalIOSUpdate);
    this.updateForm.controls['DIOSUpdate'].setValue(this.settings.DIOSUpdate);
    console.log(this.settings);
  }

}
