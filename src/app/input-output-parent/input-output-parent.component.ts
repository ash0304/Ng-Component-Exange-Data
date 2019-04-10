import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-parent',
  templateUrl: './input-output-parent.component.html',
  styleUrls: ['./input-output-parent.component.scss']
})
export class InputOutputParentComponent implements OnInit {
  initialcounter = 3;
  counter = this.initialcounter;
  constructor() { }

  ngOnInit() {
  }

  // 接收由@Output而來的EventEmitter自訂義事件 , 事件觸發時執行
  onCounterChange(counter: number) {
    this.counter = counter;
  }

}
