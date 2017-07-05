import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrganizationsComponent } from './confirm-organizations.component';

describe('ConfirmOrganizationsComponent', () => {
  let component: ConfirmOrganizationsComponent;
  let fixture: ComponentFixture<ConfirmOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
