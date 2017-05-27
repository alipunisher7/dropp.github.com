import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPassengersComponent } from './search-passengers.component';

describe('SearchPassengersComponent', () => {
  let component: SearchPassengersComponent;
  let fixture: ComponentFixture<SearchPassengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPassengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
