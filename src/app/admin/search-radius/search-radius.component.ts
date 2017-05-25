import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {AdminService} from '../../services';
@Component({
  selector: 'ts-search-radius',
  templateUrl: './search-radius.component.html',
  styleUrls: ['./search-radius.component.scss']
})
export class SearchRadiusComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'serviceType': new FormControl('', Validators.required),
      'radius': new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

}
