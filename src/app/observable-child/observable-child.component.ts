import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InitialCounterInterface } from '../interface/initial-counter.interface';

@Component({
  selector: 'app-observable-child',
  templateUrl: './observable-child.component.html',
  styleUrls: ['./observable-child.component.scss']
})
export class ObservableChildComponent implements OnInit {
  // 取得初始值
  @Input() initialcounter;
  // 使用實作介面內的counter
  counter: Observable<number> = this.counterService.counter;
  // 建立實體型別為實作介面 , 並不直接相依於Service , 徹底解耦合
  // 子組件只使用到counter 與 function setInitialCounter, 故實作介面只含兩者
  constructor(private counterService: InitialCounterInterface) { }

  ngOnInit() {
    // 使用實作介面內的setInitialCounter
    this.counterService.setInitialCounter(this.initialcounter);
  }

}
