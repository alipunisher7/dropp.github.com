import { Component, OnInit } from '@angular/core';
import {AdminService, NotificationService, OperatorService} from 'services';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {NotificationTypes, Notification, States} from 'models';

@Component({
  selector: 'ts-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.scss']
})
export class StateCityComponent implements OnInit {
  stateForm: FormGroup;
  cityForm: FormGroup;
  states: States[];
  constructor(private _adminservice: AdminService, private _notificationservice: NotificationService, private _operatorservice: OperatorService) {
    this.stateForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(2)])
    })
    this.cityForm = new FormGroup({
      'cityName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'id': new FormControl('', Validators.required)
    })
  }
  onSubmitState() {
    this._adminservice.insertState(this.stateForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'استان جدید ثبت شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.states.push(new States({ 'name': this.stateForm.controls['name'].value }))
      },
      err => {
        alert(err);
      }
    )
  }
  onSubmitCity() {
    let city = {
      name: this.cityForm.value['cityName'],
      id: this.cityForm.value['id']
    }
    this._adminservice.insertCity(city).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'شهر جدید ثبت شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.cityForm.reset();
        this.cityForm.controls['id'].setValue('');
      },
      err => {
        alert(err);
      }
    )
  }
  getStates() {
    this._operatorservice.getStates().subscribe(res => this.states = res)
  }
  ngOnInit() {
    this.getStates();
  }

}
