import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Notification, NotificationTypes } from 'models';

@Component({
  selector: 'ts-manage-search-radius',
  templateUrl: './manage-search-radius.component.html',
  styleUrls: ['./manage-search-radius.component.scss']
})
export class ManageSearchRadiusComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'serviceType': new FormControl('', Validators.required),
      'radius': new FormControl('', Validators.required)
    });
  }

  onChange(data) {
    data = { serviceType: data };
    console.log(data);
    this.myForm.controls['radius'].setValue('');

    this._adminService.viewRadius(data).subscribe(
      res => {
        this.myForm.controls['radius'].setValue(res);
      },
      err => {
        let notification = new Notification({
          title: 'عدم وجود مقدار',
          info: 'برای این سرویس محدوده تعیین نشده است',
          type: NotificationTypes.warning
        });

        this._notification.notify(notification);
      });
  }

  onSubmit() {
    this._adminService.submitRadius(this.myForm.value).subscribe(console.log);
  }

  ngOnInit() {
  }

}
