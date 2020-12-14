import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const TradingView: any;
@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    new TradingView.MediumWidget(
      {
      "symbols": [
        [
          "Ethereum",
          "KRAKEN:ETHUSD|12M"
        ],
        [
          "XRP Ripple",
          "XRP|12M"
        ],
        [
          "Litcoin",
          "KRAKEN:LTCUSD|12M"
        ],
        [
          "Bitcoin Cash",
          "KRAKEN:BCHUSD|12M"
        ]
      ],
      "chartOnly": false,
      "width": 1350,
      "height": 610,
      "locale": "en",
      "colorTheme": "light",
      "gridLineColor": "#F0F3FA",
      "trendLineColor": "#2196F3",
      "fontColor": "#787B86",
      "underLineColor": "#E3F2FD",
      "isTransparent": false,
      "autosize": false,
      "container_id": "tradingview_aa303"
    }
      );
  }

}
