import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsPanelComponent } from './trips-panel.component';

describe('TripsPanelComponent', () => {
  let component: TripsPanelComponent;
  let fixture: ComponentFixture<TripsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
