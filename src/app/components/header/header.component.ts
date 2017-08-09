import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  signout() {
    this._authService.signout();
  }
}
