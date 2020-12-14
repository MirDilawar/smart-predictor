import { Component, OnInit,AfterViewInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.css']
})
export class StockChartsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    new TradingView.widget(
      {
      "width": 1350,
      "height": 650,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Asia/Ashkhabad",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "save_image": false,
      "watchlist": [
        "NASDAQ:AAPL",
        "NYSE:IBM",
        "NYSE:PK",
        "NASDAQ:GOOG",
        "NASDAQ:MSFT"
      ],
      "calendar": true,
      "container_id": "tradingview_00dc3"
    }
      );
  }

}
