import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordCardsComponent } from './dashbord-cards.component';

describe('DashbordCardsComponent', () => {
  let component: DashbordCardsComponent;
  let fixture: ComponentFixture<DashbordCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
