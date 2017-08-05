import { Component, OnInit } from '@angular/core';
import { AdminService } from 'services';
import { saveAs } from 'file-saver';

@Component({
  selector: 'ts-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private _adminservice: AdminService) { }
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
      // this.downloadFile(data)
    },
      err => alert(err));
  }
  getTripReport() {
    this._adminservice.getTripReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'TripReport.xls';
      saveAs(blob, filename);
      // this.downloadFile(data)
    },
      err => alert(err))
  }
  getPassengersAgeReport() {
    this._adminservice.getPassengersAgeReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'PassengerAgeReport.xls';
      saveAs(blob, filename);
      // this.downloadFile(data)
    },
      err => alert(err))
  }
  getOperatorsAgeReport() {
    this._adminservice.getOperatorsAgeReport().subscribe(response => {
      var blob = new Blob([response.blob()], { type: 'vnd.ms-excel' });
      var filename = 'OperatorsAgeReport.xls';
      saveAs(blob, filename);
      // this.downloadFile(data)
    },
      err => alert(err))
  }

  ngOnInit() {
  }

}
