import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CopService, NotificationService } from 'services';
import { Notification, NotificationTypes, Manufacture} from 'models';

@Component({
  selector: 'ts-manage-manufactures',
  templateUrl: './manage-manufactures.component.html',
  styleUrls: ['./manage-manufactures.component.scss']
})
export class ManageManufacturesComponent implements OnInit {

  myForm: FormGroup;
  manufactures: Manufacture[];
  constructor(private _copService: CopService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this._copService.insertManufacture(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `خودروسازی جدید ثبت شد  `, type: NotificationTypes.success });
        this._notification.notify(notification);
        this.manufactures.push(new Manufacture({ 'name': this.myForm.controls['name'].value }));
      },
      error => { alert(error); }
    );
  }
  getManufactures() {
    this._copService.getManufacture().subscribe(res => this.manufactures = res);
  }

  ngOnInit() {
    this.getManufactures();
  }

}
