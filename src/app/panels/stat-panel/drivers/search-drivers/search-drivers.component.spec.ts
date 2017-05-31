import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDriversComponent } from './search-drivers.component';

describe('SearchDriversComponent', () => {
  let component: SearchDriversComponent;
  let fixture: ComponentFixture<SearchDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
