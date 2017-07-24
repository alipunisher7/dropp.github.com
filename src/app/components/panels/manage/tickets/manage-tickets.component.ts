import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification, NotificationTypes, ITickets } from 'models';
import { MasterService, NotificationService } from 'services'

@Component({
  selector: 'ts-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.scss']
})
export class ManageTicketsComponent implements OnInit {

  myForm: FormGroup;

  constructor(private _masterService: MasterService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'subject': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'subjectGroup': new FormControl()
    })
  }


  OnSubmit() {
    this._masterService.insertTicketSubject(this.myForm.value).subscribe(
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
