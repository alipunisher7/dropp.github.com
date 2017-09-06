import { Component, OnInit } from '@angular/core';
import { OperatorService, MasterService, NotificationService } from 'services';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Vouchers, Notification, NotificationTypes, Error } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-manage-vouchers',
  templateUrl: './manage-vouchers.component.html',
  styleUrls: ['./manage-vouchers.component.scss']
})
export class ManageVouchersComponent implements OnInit {
  vouchers: Vouchers[];
  selectedVoucher: Vouchers;
  editedVoucher: Vouchers;
  updateForm: FormGroup;




  constructor(private _operatorservice: OperatorService, private _masterservice: MasterService, private _notificationservice: NotificationService,
    private router: Router, private route: ActivatedRoute) {
    this.updateForm = new FormGroup({
      'maxUse': new FormControl('', Validators.required),
      'description': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'startAt': new FormControl('', Validators.required),
      'expireAt': new FormControl('', Validators.required),
      'voucherType': new FormControl('', Validators.required),
      'discountValue': new FormControl('', Validators.required)
    });
  }

  // getVouchers() {
  //   this._operatorservice.getVouchers().subscribe(res => this.vouchers = res);
  // }

  onMoreClick(voucher) {
    this.selectedVoucher = voucher;

  }

  editVoucher(voucher) {
    this.editedVoucher = voucher;
    this.updateForm.controls['maxUse'].setValue(this.editedVoucher.maxUse);
    this.updateForm.controls['description'].setValue(this.editedVoucher.description);
    this.updateForm.controls['startAt'].setValue(this.editedVoucher.startAt);
    this.updateForm.controls['expireAt'].setValue(this.editedVoucher.expireAt);
    this.updateForm.controls['discountType'].setValue(this.editedVoucher.discountType);
    this.updateForm.controls['discountValue'].setValue(this.editedVoucher.discountValue);
  }
  onUpdate(id) {
    this._masterservice.updateVoucher(id, this.updateForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ویرایش شد', info: 'کد تخفیف مورد نظر ویرایش شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.editedVoucher.description = this.updateForm.controls['description'].value;
        this.editedVoucher.maxUse = this.updateForm.controls['maxUse'].value;
        this.editedVoucher.startAt = this.updateForm.controls['startAt'].value;
        this.editedVoucher.expireAt = this.updateForm.controls['expireAt'].value;
        this.editedVoucher.discountType = this.updateForm.controls['discountType'].value;
        this.editedVoucher.discountValue = this.updateForm.controls['discountValue'].value;
        this.editedVoucher = null;
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }

  ngOnInit() {
    // this.getVouchers();
    this.vouchers = this.route.snapshot.data['vouchers'];
  }

}
