import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {
  @Input() initialcounter;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  // 用於計算數值
  private counter: number;
  constructor() { }

  ngOnInit() {
    // setter
    this.counter = this.initialcounter;
  }
  // Plus
  plus() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }
  // Minus
  minus() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
