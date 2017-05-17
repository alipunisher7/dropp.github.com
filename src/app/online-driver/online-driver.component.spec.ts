import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDriverComponent } from './online-driver.component';

describe('OnlineDriverComponent', () => {
  let component: OnlineDriverComponent;
  let fixture: ComponentFixture<OnlineDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
