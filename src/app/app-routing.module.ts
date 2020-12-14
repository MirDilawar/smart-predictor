import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// our project components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { StockChartsComponent } from './stock/stock-charts/stock-charts.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinChartsComponent } from './bitcoin/bitcoin-charts/bitcoin-charts.component';
import { BitcoinFundamentalAnalysisComponent } from './bitcoin/bitcoin-fundamental-analysis/bitcoin-fundamental-analysis.component';
import { StockAnalysisComponent } from './stock/stock-analysis/stock-analysis.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home',component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'register', component:UserRegisterComponent},
  {path:'login', component:UserLoginComponent},
  {path:'about',component:AboutComponent},
  {path:'stock',component:StockComponent},
  {path:'stock-chart',component:StockChartsComponent},
  {path:'stock-analysis', component:StockAnalysisComponent},
  {path:'bitcoin',component:BitcoinComponent},
  {path:'bitcoin-chart',component:BitcoinChartsComponent},
  {path:'bitcoin-analysis',component:BitcoinFundamentalAnalysisComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
