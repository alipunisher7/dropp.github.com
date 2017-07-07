import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from 'services';

@Component({
  selector: 'ts-add-operator',
  templateUrl: './add-operator.component.html',
  styleUrls: ['./add-operator.component.scss']
})
export class AddOperatorComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _adminService: AdminService) {
    this.myForm = new FormGroup({
      'fname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lname': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'birthDate': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'workPhoneCode': new FormControl('', Validators.minLength(3)),
      'workPhone': new FormControl('', Validators.minLength(7)),
      'cellPhone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'userpassword': new FormGroup({
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
        're-password': new FormControl('', Validators.required)
      }, this.rePassMatchValidator),
      'gender': new FormControl('', Validators.required),
    });
  }

  rePassMatchValidator(group: FormGroup): { [c: string]: boolean } {
    return group.get('password').value === group.get('re-password').value ? null : { confirm: true };
  }

  onSubmit() {
    this._adminService.addMOp(this.myForm.value).subscribe(res => {

    });
  }

  ngOnInit() {
  }

}
