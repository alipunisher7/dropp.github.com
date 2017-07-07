import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { NotificationTypes, Notification } from 'models'

@Component({
  selector: 'ts-tarrif',
  templateUrl: './tarrif.component.html',
  styleUrls: ['./tarrif.component.scss']
})
export class TarrifComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required),
      'before2KM': new FormControl('', Validators.required),
      'after2KM': new FormControl('', Validators.required),
      'perMin': new FormControl('', Validators.required),
      'waitingMin': new FormControl('', Validators.required),
      'entrance': new FormControl('', Validators.required),
      // 'twoWayCostPercentage': new FormControl('', Validators.required)

    });
  }

  viewTarrif() {
    this._adminService.viewTarrif().subscribe();
  }

  onSubmit() {
    console.log(this.myForm.value)
    this._adminService.submitTarrif(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تعرفه جدید ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }

  ngOnInit() {
  }

}
