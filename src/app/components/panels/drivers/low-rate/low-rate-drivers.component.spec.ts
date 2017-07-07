import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowRateDriversComponent } from './low-rate-drivers.component';

describe('LowRateDriversComponent', () => {
  let component: LowRateDriversComponent;
  let fixture: ComponentFixture<LowRateDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowRateDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowRateDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
