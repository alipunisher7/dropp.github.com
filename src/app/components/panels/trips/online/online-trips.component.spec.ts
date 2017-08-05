import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTripsComponent } from './online-trips.component';

describe('OnlineTripsComponent', () => {
  let component: OnlineTripsComponent;
  let fixture: ComponentFixture<OnlineTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
