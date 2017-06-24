import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StocksService} from "../stocks.service";
import {FormControl} from "@angular/forms";
//引入Time模块
import 'rxjs/Rx';
@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private  stocks: Array<Stock>;
  //声明后台字段
  private nameFilter : FormControl = new FormControl();
  // 接受输入框过来的value值
  private keyword:string;
  constructor(public router: Router, private StocksService: StocksService) { }
// 25重新定制路由
  ngOnInit() {
    this.stocks = this.StocksService.getStocks();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('/stock/0');
    //进行绑定
  }
    update(stock: Stock){
      this.router.navigateByUrl('/stock/' + stock.id);
    }
}

