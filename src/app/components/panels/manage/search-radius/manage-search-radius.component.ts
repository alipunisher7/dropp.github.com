import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { Notification, NotificationTypes, Radius, Error } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private _adminService: AdminService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      'serviceType': new FormControl('', Validators.required),
      'radius': new FormControl('', Validators.required)
    });

    this.updateForm = new FormGroup({
      'serviceTypeUpdate': new FormControl('', Validators.required),
      'radiusUpdate': new FormControl('', Validators.required)
    });
  }

  // getRadiuses() {
  //   this._adminService.getRadiuses().subscribe((radiuses: Radius[]) => {
  //     this.radiuses = radiuses;
  //   });
  // }

  onSubmit() {
    this._adminService.insertRadius(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `شعاع جستجو جدید ثبت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.radiuses.push(new Radius({ 'serviceType': this.myForm.controls['serviceType'].value, 'radius': this.myForm.controls['radius'].value })
        )
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }

  changeRadius(data: Radius) {
    this.selectedRadius = data;
    this.updateForm.controls['radiusUpdate'].setValue(data.radius);
    this.updateForm.controls['serviceTypeUpdate'].setValue(data.serviceType);
  }
  Cancel(){
    this.selectedRadius=null;
  }

  onUpdate() {
    let updatedRadius = {
      radius: this.updateForm.value['radiusUpdate'],
      serviceType: this.updateForm.value['serviceTypeUpdate']
    }
    console.log(updatedRadius);
    this._adminService.updateRadiusByServiceType(updatedRadius).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `شعاع جستجو آپدیت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.selectedRadius.radius = this.updateForm.controls['radiusUpdate'].value;
        this.selectedRadius = null;
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }

  ngOnInit() {
    // this.getRadiuses();
    this.radiuses = this.route.snapshot.data['searchRadius'];
  }

}
