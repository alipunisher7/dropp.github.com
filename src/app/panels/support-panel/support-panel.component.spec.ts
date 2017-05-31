import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPanelComponent } from './support-panel.component';

describe('SupportPanelComponent', () => {
  let component: SupportPanelComponent;
  let fixture: ComponentFixture<SupportPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
