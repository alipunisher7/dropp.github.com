import { Component, OnInit } from '@angular/core';
import { AdminService, NotificationService } from 'services';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Services, Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.scss']
})
export class ActiveServicesComponent implements OnInit {

  myForm: FormGroup;
  activeServices: Services[];

  constructor(private _adminService: AdminService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required)
    })
  }

  onChange(city) {
    this._adminService.getServicesOfCity(city).subscribe(res => this.activeServices = res)
  }
  enable(service) {
    if (confirm('آیا میخواهید فعال کنید؟')) {

      this._adminService.enableService(service.id).subscribe(
        res => {
          let notification = new Notification({ title: 'فعال شد', info: 'سرویس مورد نظر فعال شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          service.status = true;
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      )
    }
    else {
      alert('کنسل شد');
    }
  }
  disable(service) {
    if (confirm('آیا میخواهید غیر فعال کنید')) {

      this._adminService.disableService(service.id).subscribe(
        res => {
          let notification = new Notification({ title: 'غیر فعال شد', info: 'سرویس مورد نظر غیر فعال شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          service.status = false;
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }

      )
    }
    else {
      alert('کنسل شد');
    }
  }

  onSubmit() {
    this._adminService.insertService(this.myForm.value).subscribe(res => {
      let notification = new Notification({ title: 'ثبت شد', info: `سرویس جدید ثبت شد`, type: NotificationTypes.success });
      this._notificationservice.notify(notification);
      this.myForm.reset();
      this.myForm.controls['city'].setValue("");
      this.myForm.controls['serviceType'].setValue("");
    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }

  ngOnInit() {
  }

}
