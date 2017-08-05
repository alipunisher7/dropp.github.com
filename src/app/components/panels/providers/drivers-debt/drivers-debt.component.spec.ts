import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDebtComponent } from './drivers-debt.component';

describe('DriversDebtComponent', () => {
  let component: DriversDebtComponent;
  let fixture: ComponentFixture<DriversDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
