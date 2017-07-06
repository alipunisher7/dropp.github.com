import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification, NotificationTypes} from '../../../../models';
import {AdminService, NotificationService} from '../../../../services'
@Component({
  selector: 'ts-insert-ticket-subject',
  templateUrl: './insert-ticket-subject.component.html',
  styleUrls: ['./insert-ticket-subject.component.scss']
})
export class InsertTicketSubjectComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'subject': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  OnSubmit() {
    this._adminService.insertTicketSubject(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تیکت جدید ثبت شد `, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }
  ngOnInit() {
  }

}
