import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Notification, NotificationTypes, Radius } from 'models';

@Component({
  selector: 'ts-manage-search-radius',
  templateUrl: './manage-search-radius.component.html',
  styleUrls: ['./manage-search-radius.component.scss']
})
export class ManageSearchRadiusComponent implements OnInit {
  radiuses: Radius[];
  myForm: FormGroup;

  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'serviceType': new FormControl('', Validators.required),
      'radius': new FormControl('', Validators.required)
    });
  }

  viewRadius() {
    this._adminService.viewRadius().subscribe(res => this.radiuses = res);
  }

  onSubmit() {
    this._adminService.submitRadius(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `شعاع جستجو جدید ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }

  ngOnInit() {
    this.viewRadius();
  }

}
