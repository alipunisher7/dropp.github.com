import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForAdminComponent } from './search-for-admin.component';

describe('SearchForAdminComponent', () => {
  let component: SearchForAdminComponent;
  let fixture: ComponentFixture<SearchForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
