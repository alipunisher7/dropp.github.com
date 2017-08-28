import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorChangePasswordComponent } from './operator-change-password.component';

describe('OperatorChangePasswordComponent', () => {
  let component: OperatorChangePasswordComponent;
  let fixture: ComponentFixture<OperatorChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
