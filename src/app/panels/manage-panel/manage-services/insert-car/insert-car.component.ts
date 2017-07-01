import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AdminService } from '../../../../services';
import {manufacture} from '../../../../models'
@Component({
  selector: 'ts-insert-car',
  templateUrl: './insert-car.component.html',
  styleUrls: ['./insert-car.component.scss']
})
export class InsertCarComponent implements OnInit {
  myForm: FormGroup;
  manufactures: manufacture[];
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'manufactureID': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  getManufactures() {
    this._adminService.getManufacture().subscribe(res => {
      this.manufactures = res;
    });
  }
  onSubmit() {
    this._adminService.insertManufacture(this.myForm.value).subscribe();
  }

  ngOnInit() {

  }

}
