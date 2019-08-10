import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyContainerComponent } from './currency-container.component';

describe('CurrencyContainerComponent', () => {
  let component: CurrencyContainerComponent;
  let fixture: ComponentFixture<CurrencyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
