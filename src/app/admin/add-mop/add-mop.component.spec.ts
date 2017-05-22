import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMOpComponent } from './add-mop.component';

describe('AddMOpComponent', () => {
  let component: AddMOpComponent;
  let fixture: ComponentFixture<AddMOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
