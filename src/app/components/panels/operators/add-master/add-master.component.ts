import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Operator, Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-add-master',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.scss']
})
export class AddMasterComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _adminService: AdminService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'birthDate': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'workPhoneCode': new FormControl('', Validators.minLength(3)),
      'workNumber': new FormControl('', Validators.minLength(7)),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(11)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'userpassword': new FormGroup({
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        're-password': new FormControl('', Validators.required)
      }, this.rePassMatchValidator),
      'gender': new FormControl('', Validators.required),
    });
  }

  rePassMatchValidator(group: FormGroup): { [c: string]: boolean } {
    return group.get('password').value === group.get('re-password').value ? null : { confirm: true };
  }

  onSubmit() {
    let operator = this.convertOperatorData(this.myForm.value);
    console.log(operator);
    this._adminService.insertMaster(operator).subscribe(res => {
      let notification = new Notification({ title: 'ثبت شد', info: `اپراتور ارشد جدید ثبت شد`, type: NotificationTypes.success });
      this._notificationservice.notify(notification);
      this.myForm.reset();
      this.myForm.controls['city'].setValue('');
    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }

  ngOnInit() {
  }

  convertOperatorData(data): Operator {
    let birthDate = new Date(data.birthDate);
    let operator = new Operator({
      city: data.city,
      birthDate: {
        day: birthDate.getDate(),
        month: birthDate.getMonth() + 1,
        year: birthDate.getFullYear(),
      },
      email: data.email,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      password: data.userpassword.password,
      phoneNumber: data.phoneNumber,
      username: data.username,
      workNumber: data.workPhoneCode + data.workNumber
    });

    return operator;
  }
}
