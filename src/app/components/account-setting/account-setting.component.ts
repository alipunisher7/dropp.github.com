import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification, NotificationTypes, Error } from 'models';
import { OperatorService, NotificationService } from 'services';

@Component({
  selector: 'ts-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _operatorservice: OperatorService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'userpassword': new FormGroup({
        'newPass': new FormControl('', [Validators.required, Validators.minLength(6)]),
        'rePass': new FormControl('', Validators.required)
      }, this.rePassMatchValidator),
    })
  }
  rePassMatchValidator(group: FormGroup): { [c: string]: boolean } {
    return group.get('newPass').value === group.get('rePass').value ? null : { confirm: true };
  }
  onSubmit() {
    let data = {
      newPass: this.myForm.value['userpassword']['newPass'],
      rePass: this.myForm.value['userpassword']['rePass']
    }
    this._operatorservice.changePassword(data).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'رمز عبور تغییر یافت', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.myForm.reset();
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )

  }
  ngOnInit() {
  }

}
