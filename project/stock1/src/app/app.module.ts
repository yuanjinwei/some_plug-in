import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StartsComponent } from './starts/starts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Route,RouterModule, Routes} from "@angular/router";
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StocksService} from "./stock/stocks.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {HttpModule} from "@angular/http";

const routeConfig: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path:"stock/:id",component:StockFormComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    StockManageComponent,
    StartsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    HttpModule,
    //加入响应式模块编程模块
    ReactiveFormsModule,
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
