import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDriversCreditComponent } from './all-drivers-credit.component';

describe('AllDriversCreditComponent', () => {
  let component: AllDriversCreditComponent;
  let fixture: ComponentFixture<AllDriversCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDriversCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDriversCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
