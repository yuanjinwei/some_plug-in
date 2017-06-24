import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
  @Input()
  rating:number=0;
  @Input()
  readonly : boolean = true;
  @Output()
  ratingChange : EventEmitter<number> = new EventEmitter();
  constructor(){}
  stars : boolean [];
  ngOnInit() {

  this.stars=[];
  for (let i=1;i<= 5;i++){
    this.stars.push(i>this.rating);
  }
  }
  //40 星星点击方法
  clickStar(index:number){
    if(!this.readonly){
      this.rating=index+1;
      this.stars=[];
      for(let i=1;i<=5;i++){
        this.stars.push(i>this.rating);
     }
    }
    this.ratingChange.emit(this.rating);
  }
}
