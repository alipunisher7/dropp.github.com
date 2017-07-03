import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAllInfoComponent } from './driver-all-info.component';

describe('DriverAllInfoComponent', () => {
  let component: DriverAllInfoComponent;
  let fixture: ComponentFixture<DriverAllInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAllInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
