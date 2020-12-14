import { Component, OnInit,AfterViewInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-bitcoin-fundamental-analysis',
  templateUrl: './bitcoin-fundamental-analysis.component.html',
  styleUrls: ['./bitcoin-fundamental-analysis.component.css']
})
export class BitcoinFundamentalAnalysisComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
        "width": 1350,
        "height": 650,
      "symbol": "BITSTAMP:BTCUSD",
  "interval": "D",
  "timezone": "Asia/Ashkhabad",
  "theme": "light",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "save_image": false,
  "details": true,
  "container_id": "tradingview_759a0"
    }
      );
  }

}
