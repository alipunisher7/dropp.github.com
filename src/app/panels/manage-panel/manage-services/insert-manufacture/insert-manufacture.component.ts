import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {AdminService} from '../../../../services';
@Component({
  selector: 'ts-insert-manufacture',
  templateUrl: './insert-manufacture.component.html',
  styleUrls: ['./insert-manufacture.component.scss']
})
export class InsertManufactureComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  onSubmit() {
    this._adminService.insertManufacture(this.myForm.value).subscribe(
      data => { },
      error => { alert(error); }
    );
  }
  ngOnInit() {
  }

}
