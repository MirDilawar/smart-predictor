import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomeTickerComponent } from './home/home-ticker/home-ticker.component';
import { StockComponent } from './stock/stock.component';
import { StockChartsComponent } from './stock/stock-charts/stock-charts.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinChartsComponent } from './bitcoin/bitcoin-charts/bitcoin-charts.component';
import { BitcoinFundamentalAnalysisComponent } from './bitcoin/bitcoin-fundamental-analysis/bitcoin-fundamental-analysis.component';
import { BitcoinConverterComponent } from './bitcoin/bitcoin-converter/bitcoin-converter.component';
import { StockAnalysisComponent } from './stock/stock-analysis/stock-analysis.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AboutComponent,
    HomeComponent,
    HomeTickerComponent,
    StockComponent,
    StockChartsComponent,
    BitcoinComponent,
    BitcoinChartsComponent,
    BitcoinFundamentalAnalysisComponent,
    BitcoinConverterComponent,
    StockAnalysisComponent,
    BlogComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
