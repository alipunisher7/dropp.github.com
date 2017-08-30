import { Component, OnInit } from '@angular/core';
import { AdminService, ProviderService, NotificationService } from 'services';
import { saveAs } from 'file-saver';
import { Error, NotificationTypes, Notification } from 'models';

@Component({
  selector: 'ts-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private _adminservice: AdminService, private _providerservice: ProviderService, private _notificationservice: NotificationService) { }
  downloadFile(data: any) {
    //var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
    // var url = window.URL.createObjectURL(blob);
    window.open(data);
  }
  getDriversAgeReport() {
    this._adminservice.getDriversAgeReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'DriverAgeReport.xls';
      saveAs(blob, filename);

    },
      error => {

        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getTripReport() {
    this._adminservice.getTripReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'TripReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getPassengersAgeReport() {
    this._adminservice.getPassengersAgeReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'PassengerAgeReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getOperatorsAgeReport() {
    this._adminservice.getOperatorsAgeReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'OperatorsAgeReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getTripsCostReport() {
    this._adminservice.getTripsCostReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'TripsCostReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getDevicesReport() {
    this._adminservice.getDevicesReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'DevicesReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getDriversReport() {
    this._providerservice.getDriversReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'DriversReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getProviderClaimReport() {
    this._providerservice.getProviderClaimReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'ProviderClaimReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getAllProviderClaimReport() {
    this._adminservice.getAllProviderClaimReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'AllProviderClaimReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }
  getPeakTripsReport() {
    this._adminservice.getPeakTripsReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'PeakTripsReport.xls';
      saveAs(blob, filename);

    },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      });
  }

  ngOnInit() {
  }

}
