// import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { ChangeCounterInterface } from '../interface/change.counter.interface';

@Component({
  selector: 'app-observable-parent',
  templateUrl: './observable-parent.component.html',
  styleUrls: ['./observable-parent.component.scss']
})
export class ObservableParentComponent implements OnInit {
  initialcounter = 7;
  // 建立實體型別為實作介面 , 並不直接相依於Service , 徹底解耦合
  // 父組件只使用到add()與minus() , 故實做介面只含此兩function
  constructor(private counterService: ChangeCounterInterface) { }

  ngOnInit() {
  }
  // 使用實作介面內的add
  plus() {
    this.counterService.add();
  }
  // 使用實作介面內的minus
  minus() {
    this.counterService.minus();
  }
}
