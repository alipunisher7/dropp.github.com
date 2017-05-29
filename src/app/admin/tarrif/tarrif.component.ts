import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {AdminService} from '../../services';
@Component({
  selector: 'ts-tarrif',
  templateUrl: './tarrif.component.html',
  styleUrls: ['./tarrif.component.scss']
})
export class TarrifComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required),
      'costPerMeterBefore2KM': new FormControl('', Validators.required),
      'costPerMeterAfter2KM': new FormControl('', Validators.required),
      'costPerMinute': new FormControl('', Validators.required),
      'costPerWaitingMinute': new FormControl('', Validators.required),
      'Entrance': new FormControl('', Validators.required),
      'twoWayCostPercentage': new FormControl('', Validators.required)

    });
  }
  viewTarrif() {
    this._adminService.viewTarrif().subscribe();
  }
  onSubmit() {
    this._adminService.submitTarrif(this.myForm.value).subscribe();
  }
  ngOnInit() {
  }

}
