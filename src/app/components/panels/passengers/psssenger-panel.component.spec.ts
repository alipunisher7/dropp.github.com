import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsssengerPanelComponent } from './psssenger-panel.component';

describe('PsssengerPanelComponent', () => {
  let component: PsssengerPanelComponent;
  let fixture: ComponentFixture<PsssengerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsssengerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsssengerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
