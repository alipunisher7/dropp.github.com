import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePanelComponent } from './service-panel.component';

describe('ServicePanelComponent', () => {
  let component: ServicePanelComponent;
  let fixture: ComponentFixture<ServicePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
