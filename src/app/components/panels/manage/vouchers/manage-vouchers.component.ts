import { Component, OnInit } from '@angular/core';
import {AdminService, NotificationService} from 'services';
import {NotificationTypes, Notification} from 'models'
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ts-manage-vouchers',
  templateUrl: './manage-vouchers.component.html',
  styleUrls: ['./manage-vouchers.component.scss']
})
export class ManageVouchersComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'description': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'voucher_code_type': new FormControl('', Validators.required),
      'discount_value': new FormControl('', Validators.required),
      'code': new FormControl('', Validators.minLength(5)),
      'start_date': new FormControl('', Validators.required),
      'expire_date': new FormControl('', Validators.required),
      'max_use': new FormControl('', Validators.required),
      'count': new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this._adminService.insertCar(this.myForm.value).subscribe(
      res => {
        alert(res)
        let notification = new Notification({ title: 'ثبت شد', info: `کد اشتراک ثبت شد`, type: NotificationTypes.success });
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
