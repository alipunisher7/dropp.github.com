import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, NotificationService } from 'services';
import { NotificationTypes, Notification, Tariff } from 'models'

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
  constructor(private _adminService: AdminService, private _notification: NotificationService) {
    this.myForm = new FormGroup({
      'city': new FormControl('', Validators.required),
      'serviceType': new FormControl('', Validators.required),
      'before2KM': new FormControl('', Validators.required),
      'after2KM': new FormControl('', Validators.required),
      'perMin': new FormControl('', Validators.required),
      'waitingMin': new FormControl('', Validators.required),
      'entrance': new FormControl('', Validators.required),
      'twoWayCost': new FormControl('', Validators.required),
      'coShare': new FormControl('', Validators.required)

    });
    this.updateForm = new FormGroup({
      'tariffIDUpdate': new FormControl('', Validators.required),
      'before2KMUpdate': new FormControl('', Validators.required),
      'after2KMUpdate': new FormControl('', Validators.required),
      'perMinUpdate': new FormControl('', Validators.required),
      'waitingMinUpdate': new FormControl('', Validators.required),
      'entranceUpdate': new FormControl('', Validators.required),
      'twoWayCostUpdate': new FormControl('', Validators.required),
      'coShareUpdate': new FormControl('', Validators.required)
    });
  }

  onChange(cityName) {
    this._adminService.getTarrif(cityName).subscribe(res => this.tariffs = res);
  }


  onSubmit() {
    console.log(this.myForm.value)
    this._adminService.insertTarrif(this.myForm.value).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تعرفه جدید ثبت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }
  updateTariff(tariff: Tariff) {
    this.selectedTariff = tariff;
    this.updateForm.controls['cityUpdate'].setValue(tariff.city);
    this.updateForm.controls['serviceTypeUpdate'].setValue(tariff.serviceType);
    this.updateForm.controls['before2KMUpdate'].setValue(tariff.before2KM);
    this.updateForm.controls['after2KMUpdate'].setValue(tariff.after2KM);
    this.updateForm.controls['perMinUpdate'].setValue(tariff.perMin);
    this.updateForm.controls['waitingMinUpdate'].setValue(tariff.waitingMin);
    this.updateForm.controls['entranceUpdate'].setValue(tariff.entrance);
    this.updateForm.controls['twoWayCostUpdate'].setValue(tariff.twoWayCost);
    this.updateForm.controls['coShareUpdate'].setValue(tariff.coShare);
  }

  onUpdate() {
    let updatedTariff = {
      tariffID: this.updateForm.value['tariffIDUpdate'],
      before2KM: this.updateForm.value['before2KMUpdate'],
      after2KM: this.updateForm.value['after2KMUpdate'],
      perMin: this.updateForm.value['perMinUpdate'],
      waitingMin: this.updateForm.value['waitingMinUpdate'],
      entrance: this.updateForm.value['entranceMinUpdate'],
      twoWayCost: this.updateForm.value['twoWayCostUpdate'],
      coShare: this.updateForm.value['coShareUpdate'],
    }
    console.log(this.updateForm.value)
    this._adminService.updateTariff(updatedTariff).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `تعرفه آپدیت شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      error => { alert(error); }
    );
  }
  ngOnInit() {

  }

}
