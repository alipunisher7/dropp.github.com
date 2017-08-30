import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperatorService, NotificationService, AdminService } from 'services';
import { Notification, NotificationTypes, Driver, IServiceProviders, Error } from 'models';

@Component({
  selector: 'ts-confirm-drivers',
  templateUrl: './confirm-drivers.component.html',
  styleUrls: ['./confirm-drivers.component.scss']
})
export class ConfirmDriversComponent implements OnInit {
  serviceProviders: IServiceProviders[];
  driverUpload: Driver;
  driverMoreInfo: Driver;
  uploadForm: FormGroup;
  search: string = '';
  searchControl = new FormControl();
  drivers: Driver[];
  resultCount = 20;
  page = 0;
  file: File;
  constructor(private _operatorservice: OperatorService, private _notificationservice: NotificationService) {
    this.uploadForm = new FormGroup({
      'fileType': new FormControl('', Validators.required),
      'file': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    // debounce keystroke events
    this.searchControl.valueChanges
      .debounceTime(400)
      .subscribe(newValue => {
        this.search = newValue
        this.searchDrivers();
      });

    this.searchDrivers();
    this.getProviders();
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];

    }
  }
  getProviders() {
    this._operatorservice.getProviders().subscribe(res => this.serviceProviders = res);
  }

  searchDrivers() {
    // TODO: count and prefix
    this._operatorservice.searchDrivers({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.drivers = res);
  }

  upload(driver) {
    this.driverUpload = driver;
  }

  onUpload(username) {
    let fileType = this.uploadForm.value['fileType'];
    console.log(this.file);
    this._operatorservice.uploadDriverDoc(fileType, username, this.file).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `مدرک مورد نظر ثبت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }
  onMoreClick(driver) {
    this.driverMoreInfo = driver;
  }
  confirm(driver, provider) {
    if (confirm('آیا میخواهید تایید کنید')) {

      this._operatorservice.confirmDriver(driver.username, provider).subscribe(
        res => {
          let notification = new Notification({ title: 'تایید شد', info: 'راننده مورد نظر تایید شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          driver.stateCode = 3;
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      )
    }
    else {
      alert('کنسل شد');
    }
  }

}
