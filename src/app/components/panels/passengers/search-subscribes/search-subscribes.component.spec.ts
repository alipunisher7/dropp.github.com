import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubscribesComponent } from './search-subscribes.component';

describe('SearchSubscribesComponent', () => {
  let component: SearchSubscribesComponent;
  let fixture: ComponentFixture<SearchSubscribesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubscribesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubscribesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
