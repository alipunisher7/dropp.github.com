import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterService, NotificationService } from 'services';
import { Operator, Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _masterService: MasterService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'birthDate': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'workNumber': new FormControl('', Validators.minLength(7)),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(11)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'userpassword': new FormGroup({
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        're-password': new FormControl('', Validators.required)
      }, this.rePassMatchValidator),
      'gender': new FormControl('', Validators.required),
    });
  }
  @Input() operator: Operator;
  editOperator: Operator;
  edit(operator) {
    this.editOperator = operator;
    this.myForm.controls['firstName'].setValue(operator.firstName);
    this.myForm.controls['lastName'].setValue(operator.lastName);
    this.myForm.controls['birthDate'].setValue(operator.birthDate);
    this.myForm.controls['city'].setValue(operator.city);
    this.myForm.controls['workNumber'].setValue(operator.workNumber);
    this.myForm.controls['phoneNumber'].setValue(operator.phoneNumber);
    this.myForm.controls['email'].setValue(operator.email);
    this.myForm.controls['gender'].setValue(operator.gender);
    this.myForm.controls['password'].setValue(operator.gender);
  }
  ngOnInit() {
  }
  rePassMatchValidator(group: FormGroup): { [c: string]: boolean } {
    return group.get('password').value === group.get('re-password').value ? null : { confirm: true };
  }
  convertOperatorData(data): Operator {
    let birthDate = new Date(data.birthDate);
    let operator: Operator = new Operator({
      city: data.city,
      email: data.email,
      birthDate: {
        day: birthDate.getDate(),
        month: birthDate.getMonth() + 1,
        year: birthDate.getFullYear()
      },
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
  onSubmit() {
    let operator = this.convertOperatorData(this.myForm.value);
    console.log(operator);
    this._masterService.insertOperator(operator).subscribe(res => {
      let notification = new Notification({ title: 'ثبت شد', info: `اپراتور مورد نظر ویرایش شد`, type: NotificationTypes.success });
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

}
