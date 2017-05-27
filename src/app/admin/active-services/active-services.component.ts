import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ts-active-services',
  templateUrl: './active-services.component.html',
  styleUrls: ['./active-services.component.scss']
})
export class ActiveServicesComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'normal': new FormControl(),
      'eco': new FormControl(),
      'taxi': new FormControl(),
      'suv': new FormControl(),
      'lux': new FormControl(),
      'motor_transport': new FormControl(),
      'motor_delivery': new FormControl()
    })
  }
  viewActiveServices() {
    this._adminService.viewActiveServices().subscribe();
  }
  onSubmit() {
    this._adminService.submitActiveServices(this.myForm.value).subscribe();
  }
  ngOnInit() {
  }

}
