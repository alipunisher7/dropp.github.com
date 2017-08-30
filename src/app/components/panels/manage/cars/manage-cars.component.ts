import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CopService, NotificationService } from 'services';
import { Manufacture, Notification, NotificationTypes, Error } from 'models';

@Component({
  selector: 'ts-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent implements OnInit {

  myForm: FormGroup;
  manufactures: Manufacture[];

  constructor(private _copService: CopService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'manufactureID': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  getManufactures() {
    this._copService.getManufacture().subscribe(manufactures => {
      this.manufactures = manufactures;
    });
  }

  onSubmit() {
    this._copService.insertCar(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `خودرو ثبت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.myForm.reset();
        this.myForm.controls['manufactureID'].setValue('');
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }

  ngOnInit() {
    this.getManufactures()
  }

}
