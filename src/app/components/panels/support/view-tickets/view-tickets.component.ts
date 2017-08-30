import { Component, OnInit } from '@angular/core';
import { ITickets, Notification, NotificationTypes, Error } from 'models';
import { OperatorService, NotificationService } from 'services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {
  tickets: ITickets[];
  constructor(private _operatorService: OperatorService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) { }
  // getUnresolvedTickets() {
  //   this._operatorService.getTickets().subscribe(res => this.tickets = res);
  // }
  resolved(ticket) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._operatorService.resolveTicket(ticket.id).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: 'تیکت مورد نظر رسیدگی شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          let index = this.tickets.indexOf(ticket);
          if (index > -1) {
            this.tickets.splice(index, 1);
          }
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        });
    }
    else {
      alert('کنسل شد')
    }
  }
  ngOnInit() {
    // this.getUnresolvedTickets()
    this.tickets = this.route.snapshot.data['tickets'];
  }

}
