import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CopService, NotificationService } from 'services';
import { Notification, NotificationTypes, Manufacture, Error } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-manage-manufactures',
  templateUrl: './manage-manufactures.component.html',
  styleUrls: ['./manage-manufactures.component.scss']
})
export class ManageManufacturesComponent implements OnInit {

  myForm: FormGroup;
  manufactures: Manufacture[];
  constructor(private _copService: CopService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this._copService.insertManufacture(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `خودروسازی جدید ثبت شد  `, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.manufactures.push(new Manufacture({ 'name': this.myForm.controls['name'].value }));
        this.myForm.reset();
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }
  // getManufactures() {
  //   this._copService.getManufacture().subscribe(res => this.manufactures = res);
  // }

  ngOnInit() {
    // this.getManufactures();
    this.manufactures = this.route.snapshot.data['manufactures'];
  }

}
