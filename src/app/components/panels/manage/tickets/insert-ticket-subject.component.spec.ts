import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTicketSubjectComponent } from './insert-ticket-subject.component';

describe('InsertTicketSubjectComponent', () => {
  let component: InsertTicketSubjectComponent;
  let fixture: ComponentFixture<InsertTicketSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertTicketSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTicketSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
