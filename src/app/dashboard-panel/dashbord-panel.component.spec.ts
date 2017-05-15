import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordPanelComponent } from './dashbord-panel.component';

describe('DashbordPanelComponent', () => {
  let component: DashbordPanelComponent;
  let fixture: ComponentFixture<DashbordPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
