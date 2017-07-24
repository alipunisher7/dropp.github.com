import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsForAdminComponent } from './operators-for-admin.component';

describe('OperatorsForAdminComponent', () => {
  let component: OperatorsForAdminComponent;
  let fixture: ComponentFixture<OperatorsForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
