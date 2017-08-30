import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService, NotificationService } from 'services';
import { Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-operator-change-password',
  templateUrl: './operator-change-password.component.html',
  styleUrls: ['./operator-change-password.component.scss']
})
export class OperatorChangePasswordComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _masterservice: MasterService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'username': new FormControl('', Validators.required),
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
    let username = this.myForm.controls['username'].value;
    this._masterservice.opChangePass(username, data).subscribe(
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
    console.log(data);
    console.log(username);

  }


  ngOnInit() {
  }

}
