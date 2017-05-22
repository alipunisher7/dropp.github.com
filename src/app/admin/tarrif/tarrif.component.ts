import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'ts-tarrif',
  templateUrl: './tarrif.component.html',
  styleUrls: ['./tarrif.component.scss']
})
export class TarrifComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required),
      'costPerMeterBefore2KM': new FormControl('', Validators.required),
      'costPerMeterAfter2KM': new FormControl('', Validators.required),
      'costPerMinute': new FormControl('', Validators.required),
      'costPerWaitingMinute': new FormControl('', Validators.required),
      'Entrance': new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log(this.myForm);
  }
  ngOnInit() {
  }

}
