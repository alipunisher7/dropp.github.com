import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTaxiComponent } from './send-taxi.component';

describe('SendTaxiComponent', () => {
  let component: SendTaxiComponent;
  let fixture: ComponentFixture<SendTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
