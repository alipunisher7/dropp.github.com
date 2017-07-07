import { Injectable } from '@angular/core';
import { Notification } from 'models';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  private notificationSource = new Subject<Notification>();
  public notif$ = this.notificationSource.asObservable();

  private clearSource = new Subject<boolean>();
  public clear$ = this.clearSource.asObservable();

  constructor() { }

  public notify(notification: Notification) {
    this.notificationSource.next(notification);
  }

  public clear() {
    this.clearSource.next(false);
  }

}
