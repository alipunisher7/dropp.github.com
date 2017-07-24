import { Component, OnInit } from '@angular/core';
import { OperatorService, MasterService } from 'services';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Vouchers } from 'models';

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




  constructor(private _operatorservice: OperatorService, private _masterservice: MasterService) {
    this.updateForm = new FormGroup({
      'maxUse': new FormControl('', Validators.required),
      'description': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'startDate': new FormControl('', Validators.required),
      'expireDate': new FormControl('', Validators.required),
      'codeType': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required)
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
    // this.updateForm.controls['maxUse'].setValue(this.editedVoucher.maxUse);
    this.updateForm.controls['description'].setValue(this.editedVoucher.description);
    this.updateForm.controls['startDate'].setValue(this.editedVoucher.startDate);
    this.updateForm.controls['expireDate'].setValue(this.editedVoucher.expireDate);
    // this.updateForm.controls['codeType'].setValue(this.editedVoucher.codeType);
    // this.updateForm.controls['value'].setValue(this.editedVoucher.value);
  }

  ngOnInit() {
    this.getVouchers();
  }

}
