import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'services';
import { User } from 'models';

@Component({
  selector: 'ts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _authService: AuthService, private _router: Router) {
    this.myForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    this._authService.login(new User(this.myForm.value))
      .subscribe(_ => {
        console.log(_);
        console.log(this._authService.currentUser);
        this._router.navigate(['operator/dashboard']);
      },
      err => {
        console.warn('Wrong');
      });

  }

  ngOnInit() {
  }

}
