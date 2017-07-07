import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertManufactureComponent } from './insert-manufacture.component';

describe('InsertManufactureComponent', () => {
  let component: InsertManufactureComponent;
  let fixture: ComponentFixture<InsertManufactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertManufactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertManufactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
