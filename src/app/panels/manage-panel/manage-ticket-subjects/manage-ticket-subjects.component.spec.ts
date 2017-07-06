import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTicketSubjectsComponent } from './manage-ticket-subjects.component';

describe('ManageTicketSubjectsComponent', () => {
  let component: ManageTicketSubjectsComponent;
  let fixture: ComponentFixture<ManageTicketSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTicketSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTicketSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
