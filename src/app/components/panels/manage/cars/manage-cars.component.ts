import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Manufacture, Notification, NotificationTypes } from 'models';

@Component({
  selector: 'ts-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent implements OnInit {

  myForm: FormGroup;
  manufactures: Manufacture[];

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
