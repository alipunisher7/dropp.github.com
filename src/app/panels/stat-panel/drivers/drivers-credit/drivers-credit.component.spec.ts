import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversCreditComponent } from './drivers-credit.component';

describe('DriversCreditComponent', () => {
  let component: DriversCreditComponent;
  let fixture: ComponentFixture<DriversCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
