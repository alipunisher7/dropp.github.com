import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateVoucherComponent } from './generate-voucher.component';

describe('GenerateVoucherComponent', () => {
  let component: GenerateVoucherComponent;
  let fixture: ComponentFixture<GenerateVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
