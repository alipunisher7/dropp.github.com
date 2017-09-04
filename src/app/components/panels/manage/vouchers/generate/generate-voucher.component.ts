import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService, NotificationService } from 'services';
import { NotificationTypes, Notification, Error } from 'models'

@Component({
  selector: 'ts-generate-voucher',
  templateUrl: './generate-voucher.component.html',
  styleUrls: ['./generate-voucher.component.scss']
})
export class GenerateVoucherComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _masterService: MasterService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'cityLimit': new FormControl(''),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'discountValue': new FormControl('', Validators.required),
      'discountType': new FormControl('', Validators.required),
      'discountLimit': new FormControl(''),
      'startAt': new FormControl('', Validators.required),
      'expireAt': new FormControl(''),
      'generationType': new FormControl('A'),
      'voucherCode': new FormControl('', Validators.minLength(3)),
      'maxUse': new FormControl('', Validators.required),
      'tripType': new FormControl('', Validators.required),
      'serviceType': new FormControl(''),
    });
  }

  ngOnInit() {
  }

  check() {
    this.myForm.controls['generationType'].setValue('M');
  }

  onSubmit() {
    console.log((new Date(this.myForm.controls['startAt'].value).getTime()));
    this._masterService.insertVoucher(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `کد تخفیف ثبت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }

}
