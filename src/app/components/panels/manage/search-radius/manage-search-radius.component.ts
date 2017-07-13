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
  updateForm: FormGroup;
  selectedRadius: Radius;
  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'serviceType': new FormControl('', Validators.required),
      'radius': new FormControl('', Validators.required)
    });

    this.updateForm = new FormGroup({
      'serviceTypeUpdate': new FormControl('', Validators.required),
      'radiusUpdate': new FormControl('', Validators.required)
    });
  }

  getRadius() {
    this._adminService.getRadius().subscribe((radiuses: Radius[]) => {
      this.radiuses = radiuses;
    });
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

  changeRadius(data: Radius) {
    this.selectedRadius = data;
    this.updateForm.controls['radiusUpdate'].setValue(data.radius);
    this.updateForm.controls['serviceTypeUpdate'].setValue(data.serviceType);
  }

  onUpdate() {
    let updateRadius = {
      radius: this.updateForm.value['radiusUpdate'],
      serviceType: this.updateForm.value['serviceTypeUpdate']
    }
    this._adminService.updateRadius(updateRadius).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `شعاع جستجو آپدیت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }

  ngOnInit() {
    this.getRadius();
  }

}
