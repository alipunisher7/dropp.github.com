import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOperatorComponent } from './search-operator.component';

describe('SearchOperatorComponent', () => {
  let component: SearchOperatorComponent;
  let fixture: ComponentFixture<SearchOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
