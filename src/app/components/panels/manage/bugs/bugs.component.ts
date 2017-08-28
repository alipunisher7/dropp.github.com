import { Component, OnInit } from '@angular/core';
import { AdminService, NotificationService } from 'services'
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationTypes, Notification, Bugs } from 'models';

@Component({
  selector: 'ts-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})

export class BugsComponent implements OnInit {
  bugs: Bugs[]
  constructor(private _adminservice: AdminService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) { }
  // getbugs() {
  //   this._adminservice.getBugs().subscribe(res => this.bugs = res);
  // }
  onChange(bug) {
    this._adminservice.resolveBug(bug.id).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'خطا مورد نظر رسیدگی شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        bug.state = 'R';
      },
      err => {
        alert(err);
      }
    )
  }
  ngOnInit() {
    // this.getbugs();
    this.bugs = this.route.snapshot.data['bugs'];
  }

}
