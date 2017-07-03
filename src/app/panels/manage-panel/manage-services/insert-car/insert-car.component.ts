import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { AdminService, NotificationService } from '../../../../services';
import {manufacture, Notification, NotificationTypes} from '../../../../models';
@Component({
  selector: 'ts-insert-car',
  templateUrl: './insert-car.component.html',
  styleUrls: ['./insert-car.component.scss']
})
export class InsertCarComponent implements OnInit {
  myForm: FormGroup;
  manufactures: manufacture[];
  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'manufactureID': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  getManufactures() {
    this._adminService.getManufacture().subscribe(manufactures => {
      this.manufactures = manufactures;
    });
  }
  onSubmit() {
    this._adminService.insertCar(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `خودرو ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }

  ngOnInit() {
    this.getManufactures()
  }

}
