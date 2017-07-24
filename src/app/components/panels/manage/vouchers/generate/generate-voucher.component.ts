import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MasterService, NotificationService } from 'services';
import { NotificationTypes, Notification } from 'models'

@Component({
  selector: 'ts-generate-voucher',
  templateUrl: './generate-voucher.component.html',
  styleUrls: ['./generate-voucher.component.scss']
})
export class GenerateVoucherComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _masterService: MasterService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'description': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'codeType': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required),
      'code': new FormControl('', Validators.minLength(5)),
      'startDate': new FormControl('', Validators.required),
      'expireDate': new FormControl('', Validators.required),
      'maxUse': new FormControl('', Validators.required),
      'generationType': new FormControl('A')
    });
  }

  ngOnInit() {
  }

  check() {
    this.myForm.controls['generationType'].setValue('M');
  }

  onSubmit() {

    this._masterService.insertVoucher(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `کد اشتراک ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }

}
