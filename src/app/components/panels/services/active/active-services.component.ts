import { Component, OnInit } from '@angular/core';
import { AdminService, NotificationService } from 'services';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {IServices, Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.scss']
})
export class ActiveServicesComponent implements OnInit {

  myForm: FormGroup;
  activeServices: IServices[];

  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required)
    })
  }

  // viewActiveServices() {
  //   this._adminService.viewActiveServices().subscribe();
  // }
  onChange(city) {
    this._adminService.getServicesOfCity(city).subscribe(res => this.activeServices = res)
  }

  onSubmit() {
    this._adminService.insertService(this.myForm.value).subscribe(res => {
      let notification = new Notification({ title: 'ثبت شد', info: `سرویس جدید ثبت شد`, type: NotificationTypes.success });
      this._notification.notify(notification);
    },
      err => {
        alert(err);
      });
  }

  ngOnInit() {
  }

}
