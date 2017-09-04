import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { NotificationTypes, Notification, Tariff, Error } from 'models'

@Component({
  selector: 'ts-tarrif',
  templateUrl: './tarrif.component.html',
  styleUrls: ['./tarrif.component.scss']
})
export class TarrifComponent implements OnInit {
  tariffs: Tariff[];
  selectedTariff: Tariff;
  myForm: FormGroup;
  updateForm: FormGroup;
  constructor(private _adminService: AdminService, private _notificationservice: NotificationService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required),
      'before2KM': new FormControl('', Validators.required),
      'after2KM': new FormControl('', Validators.required),
      'perMin': new FormControl('', Validators.required),
      'waitingMin': new FormControl('', Validators.required),
      'entrance': new FormControl('', Validators.required),
      'twoWayCost': new FormControl('', Validators.required),
      'genoShare': new FormControl('', Validators.required)

    });
    this.updateForm = new FormGroup({
      'tariffIDUpdate': new FormControl('', Validators.required),
      'before2KMUpdate': new FormControl('', Validators.required),
      'after2KMUpdate': new FormControl('', Validators.required),
      'perMinUpdate': new FormControl('', Validators.required),
      'waitingMinUpdate': new FormControl('', Validators.required),
      'entranceUpdate': new FormControl('', Validators.required),
      'twoWayCostUpdate': new FormControl('', Validators.required),
      'genoShareUpdate': new FormControl('', Validators.required)
    });
  }

  onChange(cityName) {
    this._adminService.getTarrif(cityName).subscribe(res => this.tariffs = res);
  }


  onSubmit() {
    this._adminService.insertTarrif(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تعرفه جدید ثبت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.myForm.reset();
        this.myForm.controls['city'].setValue('');
        this.myForm.controls['serviceType'].setValue('');
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    );
  }
  updateTariff(tariff: Tariff) {
    this.selectedTariff = tariff;
    this.updateForm.controls['tariffIDUpdate'].setValue(tariff.id.toString());
    this.updateForm.controls['before2KMUpdate'].setValue(tariff.before2KM.toString());
    this.updateForm.controls['after2KMUpdate'].setValue(tariff.after2KM.toString());
    this.updateForm.controls['perMinUpdate'].setValue(tariff.perMin.toString());
    this.updateForm.controls['waitingMinUpdate'].setValue(tariff.waitingMin.toString());
    this.updateForm.controls['entranceUpdate'].setValue(tariff.entrance.toString());
    this.updateForm.controls['twoWayCostUpdate'].setValue(tariff.twoWayCost.toString());
    this.updateForm.controls['genoShareUpdate'].setValue(tariff.genoShare.toString());
  }

  onUpdate() {
    let updatedTariff = {
      tariffID: this.updateForm.value['tariffIDUpdate'],
      before2KM: this.updateForm.value['before2KMUpdate'],
      after2KM: this.updateForm.value['after2KMUpdate'],
      perMin: this.updateForm.value['perMinUpdate'],
      waitingMin: this.updateForm.value['waitingMinUpdate'],
      entrance: this.updateForm.value['entranceUpdate'],
      twoWayCost: this.updateForm.value['twoWayCostUpdate'],
      genoShare: this.updateForm.value['genoShareUpdate'],
    }
    this._adminService.updateTariff(updatedTariff).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تعرفه آپدیت شد`, type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        this.selectedTariff.before2KM = this.updateForm.controls['before2KMUpdate'].value;
        this.selectedTariff.after2KM = this.updateForm.controls['after2KMUpdate'].value;
        this.selectedTariff.perMin = this.updateForm.controls['perMinUpdate'].value;
        this.selectedTariff.waitingMin = this.updateForm.controls['waitingMinUpdate'].value;
        this.selectedTariff.entrance = this.updateForm.controls['entranceUpdate'].value;
        this.selectedTariff.twoWayCost = this.updateForm.controls['twoWayCostUpdate'].value;
        this.selectedTariff.genoShare = this.updateForm.controls['genoShareUpdate'].value;
        this.selectedTariff = null;
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
