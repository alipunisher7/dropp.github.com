import { Component, OnInit } from '@angular/core';
import { OperatorService, MasterService, NotificationService } from 'services';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Vouchers, Notification, NotificationTypes} from 'models';

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




  constructor(private _operatorservice: OperatorService, private _masterservice: MasterService, private _notificationservice: NotificationService) {
    this.updateForm = new FormGroup({
      'maxUses': new FormControl('', Validators.required),
      'description': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'startDate': new FormControl('', Validators.required),
      'expireDate': new FormControl('', Validators.required),
      'voucherType': new FormControl('', Validators.required),
      'discountValue': new FormControl('', Validators.required)
    });
  }

  getVouchers() {
    this._operatorservice.getVouchers().subscribe(res => this.vouchers = res);
  }

  onMoreClick(voucher) {
    this.selectedVoucher = voucher;

  }

  editVoucher(voucher) {
    this.editedVoucher = voucher;
    this.updateForm.controls['maxUses'].setValue(this.editedVoucher.maxUses);
    this.updateForm.controls['description'].setValue(this.editedVoucher.description);
    this.updateForm.controls['startDate'].setValue(this.editedVoucher.startDate);
    this.updateForm.controls['expireDate'].setValue(this.editedVoucher.expireDate);
    this.updateForm.controls['voucherType'].setValue(this.editedVoucher.voucherType);
    this.updateForm.controls['discountValue'].setValue(this.editedVoucher.discountValue);
  }
  onUpdate(id) {
    this._masterservice.updateVoucher(id, this.updateForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ویرایش شد', info: 'کد تخفیف مورد نظر ویرایش شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      err => {
        alert(err);
      }
    )
  }

  ngOnInit() {
    this.getVouchers();
  }

}
