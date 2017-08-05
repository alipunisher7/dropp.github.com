import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {OperatorService, NotificationService} from 'services';
import {Notification, NotificationTypes, IStates, ICities} from 'models';

@Component({
  selector: 'ts-subscribe-register',
  templateUrl: './subscribe-register.component.html',
  styleUrls: ['./subscribe-register.component.scss']
})
export class SubscribeRegisterComponent implements OnInit {
  myForm: FormGroup;
  states: IStates;
  cities: ICities;
  constructor(private _operatorservice: OperatorService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'line1': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'line2': new FormControl('', Validators.minLength(5)),
      'postalCode': new FormControl('', Validators.minLength(10)),
      'state': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    let subUser = {
      firstName: this.myForm.value['firstName'],
      lastName: this.myForm.value['lastName'],
      phoneNumber: this.myForm.value['phoneNumber'],
      line1: this.myForm.value['line1'],
      line2: this.myForm.value['line2'],
      postalCode: this.myForm.value['postalCode'],
      city: this.myForm.value['city']
    }

    this._operatorservice.insertSubscribe(subUser).subscribe(
      res => {
        alert(res.code)
        let notification = new Notification({ title: 'ثبت شد', info: `اشتراک جدید ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
        this.myForm.reset();
        this.myForm.controls['state'].setValue('');
        this.myForm.controls['city'].setValue('');
      },
      err => {
        alert(err);
      }
    );
  }
  getState() {
    this._operatorservice.getStates().subscribe(res => this.states = res);
  }
  onChange(id) {
    this._operatorservice.getCities(id).subscribe(res => this.cities = res);
  }

  ngOnInit() {
    this.getState();
  }

}
