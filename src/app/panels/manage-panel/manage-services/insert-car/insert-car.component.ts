import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {AdminService } from '../../../../services';
@Component({
  selector: 'ts-insert-car',
  templateUrl: './insert-car.component.html',
  styleUrls: ['./insert-car.component.scss']
})
export class InsertCarComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'manufacture': new FormControl('', Validators.required),
      'carName': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  onSubmit() {
    this._adminService.insertManufacture(this.myForm.value).subscribe();
  }
  ngOnInit() {
  }

}
