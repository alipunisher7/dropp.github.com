import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsPanelComponent } from './operators-panel.component';

describe('OperatorsPanelComponent', () => {
  let component: OperatorsPanelComponent;
  let fixture: ComponentFixture<OperatorsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
