import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDriversComponent } from './confirm-drivers.component';

describe('ConfirmDriversComponent', () => {
  let component: ConfirmDriversComponent;
  let fixture: ComponentFixture<ConfirmDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
