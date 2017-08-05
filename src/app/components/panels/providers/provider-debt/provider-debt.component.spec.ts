import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDebtComponent } from './provider-debt.component';

describe('ProviderDebtComponent', () => {
  let component: ProviderDebtComponent;
  let fixture: ComponentFixture<ProviderDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
