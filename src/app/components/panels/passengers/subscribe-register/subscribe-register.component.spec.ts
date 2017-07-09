import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeRegisterComponent } from './subscribe-register.component';

describe('SubscribeRegisterComponent', () => {
  let component: SubscribeRegisterComponent;
  let fixture: ComponentFixture<SubscribeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
