import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBannedUsersComponent } from './manage-banned-users.component';

describe('ManageBannedUsersComponent', () => {
  let component: ManageBannedUsersComponent;
  let fixture: ComponentFixture<ManageBannedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBannedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBannedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
