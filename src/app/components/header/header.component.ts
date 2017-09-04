import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services';
import { Router } from '@angular/router';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signout() {
    this._authService.signout();
  }
  accountSetting() {
    this.router.navigate(['operator/account-setting']);
  }
  dashboard() {
    this.router.navigate(['operator/dashboard']);
  }
}
