import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() { }

  private stocks:Stock[]= [
    new Stock(1, '蓝科教育', 1.25, 4, '蓝科教育新三板上市', ['IT', '教育']),
    new Stock(2, '阿里', 30, 4, '比较庞大的公司', ['IT']),
    new Stock(3, '京东', 10.5, 3, '奶茶妹妹', ['IT', '电商']),
    new Stock(4, '百度', 20, 4, '靠搜索引擎赚钱', ['IT']),
    new Stock(5, '腾讯', 29, 4, '一直模仿', ['教育']),
    new Stock(6, '陌陌', 10, 3, '一个言顺喜欢的APP', ['电商', '教育']),
  ];
  getStocks():Stock[]{
    return this.stocks;
  }
  getStock(id: number):Stock{
    return this.stocks.find(stock => stock.id == id);
  }
}
// 从stock-manage中拿过来manage
export class Stock{
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}
