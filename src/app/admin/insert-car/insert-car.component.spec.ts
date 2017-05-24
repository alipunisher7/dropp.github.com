import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCarComponent } from './insert-car.component';

describe('InsertCarComponent', () => {
  let component: InsertCarComponent;
  let fixture: ComponentFixture<InsertCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
