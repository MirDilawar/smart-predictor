import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrls: ['./stock-analysis.component.css']
})
export class StockAnalysisComponent implements OnInit,AfterViewInit {

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
      "details": true,
      "container_id": "tradingview_deb0b"
    }
      );
   }

}
