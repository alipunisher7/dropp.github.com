import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {OperatorService, NotificationService} from 'services';
import {Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-subscribe-register',
  templateUrl: './subscribe-register.component.html',
  styleUrls: ['./subscribe-register.component.scss']
})
export class SubscribeRegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _operatorservice: OperatorService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'address': new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }
  onSubmit() {
    this._operatorservice.subscribeRegister(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `اشتراک جدید ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }


  ngOnInit() {
  }

}
