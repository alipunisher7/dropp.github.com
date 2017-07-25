import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCityComponent } from './state-city.component';

describe('StateCityComponent', () => {
  let component: StateCityComponent;
  let fixture: ComponentFixture<StateCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
