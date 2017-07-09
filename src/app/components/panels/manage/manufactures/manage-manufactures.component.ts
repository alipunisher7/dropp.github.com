import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-manage-manufactures',
  templateUrl: './manage-manufactures.component.html',
  styleUrls: ['./manage-manufactures.component.scss']
})
export class ManageManufacturesComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this._adminService.insertManufacture(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `خودروسازی جدید ثبت شد  `, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }

  ngOnInit() {
  }

}