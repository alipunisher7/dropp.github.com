import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVouchersComponent } from './manage-vouchers.component';

describe('ManageVouchersComponent', () => {
  let component: ManageVouchersComponent;
  let fixture: ComponentFixture<ManageVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
