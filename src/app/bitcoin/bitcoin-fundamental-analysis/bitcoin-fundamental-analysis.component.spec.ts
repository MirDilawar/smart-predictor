import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinFundamentalAnalysisComponent } from './bitcoin-fundamental-analysis.component';

describe('BitcoinFundamentalAnalysisComponent', () => {
  let component: BitcoinFundamentalAnalysisComponent;
  let fixture: ComponentFixture<BitcoinFundamentalAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinFundamentalAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinFundamentalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
