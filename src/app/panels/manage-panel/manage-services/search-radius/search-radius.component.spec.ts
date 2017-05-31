import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRadiusComponent } from './search-radius.component';

describe('SearchRadiusComponent', () => {
  let component: SearchRadiusComponent;
  let fixture: ComponentFixture<SearchRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
