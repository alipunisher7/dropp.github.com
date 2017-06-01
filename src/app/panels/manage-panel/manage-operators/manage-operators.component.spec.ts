import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOperatorsComponent } from './manage-operators.component';

describe('ManageOperatorsComponent', () => {
  let component: ManageOperatorsComponent;
  let fixture: ComponentFixture<ManageOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
