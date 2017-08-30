import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Notification, NotificationTypes, ITickets, Error } from 'models';
import { MasterService, NotificationService } from 'services'

@Component({
  selector: 'ts-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.scss']
})
export class ManageTicketsComponent implements OnInit {

  myForm: FormGroup;
  tickets: ITickets[];
  constructor(private _masterService: MasterService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'subject': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'role': new FormControl('', Validators.required),
      'parentID': new FormControl('')
    })
  }

  onChange(val) {
    this._masterService.getTicketSubjects().subscribe(res => this.tickets = res.filter(item => item.role == val));
  }
  OnSubmit() {
    this._masterService.insertTicketSubject(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تیکت جدید ثبت شد `, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.myForm.reset();
        this.myForm.controls['role'].setValue('');
        this.myForm.controls['parentID'].setValue('');
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);

      }
    );
  }

  ngOnInit() {

  }

}
