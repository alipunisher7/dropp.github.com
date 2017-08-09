import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import {  Notification, NotificationTypes } from 'models';
@Component({
  selector: 'ts-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminservice: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  onSubmit() {
    this._adminservice.insertProvider(this.myForm.value).subscribe(res => {
      let notification = new Notification({ title: 'ثبت شد', info: `ارائه دهنده جدید ثبت شد`, type: NotificationTypes.success });
      this._notification.notify(notification);
      this.myForm.reset();
    },
      err => {
        alert(err);
      }
    );
  }
  ngOnInit() {
  }

}
