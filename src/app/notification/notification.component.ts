import { Component, OnInit } from '@angular/core';
import { Notification, NotificationTypes } from '../models';
import { NotificationService } from '../services';

@Component({
  selector: 'ts-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: Array<Notification> = [];

  constructor(private notificationService: NotificationService) {
    notificationService.notif$.subscribe(
      notification => {
        this.notifications.push(notification);
        let time = notification.time;
        setTimeout(() => { this.clearNotification(notification); }, time);
      });

    notificationService.clear$.subscribe(
      (foo) => {
        this.notifications = [];
      });
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.notificationService.notify(new Notification({ info: 'کاربر با موفقیت ثبت شد', title: 'ثبت شد', type: NotificationTypes.success }))
    // }, 1000);
  }

  clearNotification(notification: Notification) {
    notification.in = false;
    let index = this.notifications.indexOf(notification);
    if(index !== -1) {
      setTimeout(() => {
        this.notifications.splice(index, 1);
      }, 500);
    }
  }

}
