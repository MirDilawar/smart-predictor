import { Component, OnInit,AfterViewInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-bitcoin-charts',
  templateUrl: './bitcoin-charts.component.html',
  styleUrls: ['./bitcoin-charts.component.css']
})
export class BitcoinChartsComponent implements OnInit, AfterViewInit {

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
      "toolbar_bg": "#FFFFFF",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "save_image": false,
      "watchlist": [
        "BITSTAMP:ETHUSD",
        "BITFINEX:XRPUSD",
        "BITFINEX:LTCUSD",
        "BINANCE:BCHBTC",
        "BITSTAMP:BTCUSD"
      ],
      "container_id": "tradingview_e85e2"
    }
      );
  }

}
