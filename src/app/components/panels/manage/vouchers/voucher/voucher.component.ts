import { Component, OnInit, Input } from '@angular/core';
import {Vouchers} from 'models';

@Component({
  selector: 'ts-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  @Input() voucher: Vouchers;
  constructor() { }

  ngOnInit() {
  }

}
