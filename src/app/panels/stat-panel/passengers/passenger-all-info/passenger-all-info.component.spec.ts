import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAllInfoComponent } from './passenger-all-info.component';

describe('PassengerAllInfoComponent', () => {
  let component: PassengerAllInfoComponent;
  let fixture: ComponentFixture<PassengerAllInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerAllInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerAllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
