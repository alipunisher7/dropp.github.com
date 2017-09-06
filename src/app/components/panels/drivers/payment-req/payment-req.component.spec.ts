import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReqComponent } from './payment-req.component';

describe('PaymentReqComponent', () => {
  let component: PaymentReqComponent;
  let fixture: ComponentFixture<PaymentReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
