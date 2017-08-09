import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSearchDriversComponent } from './provider-search-drivers.component';

describe('ProviderSearchDriversComponent', () => {
  let component: ProviderSearchDriversComponent;
  let fixture: ComponentFixture<ProviderSearchDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSearchDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSearchDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
