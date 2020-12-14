import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinChartsComponent } from './bitcoin-charts.component';

describe('BitcoinChartsComponent', () => {
  let component: BitcoinChartsComponent;
  let fixture: ComponentFixture<BitcoinChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
