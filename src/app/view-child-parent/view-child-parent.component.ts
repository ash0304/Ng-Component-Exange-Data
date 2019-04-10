import { ViewChildChildComponent } from './../view-child-child/view-child-child.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.scss']
})
export class ViewChildParentComponent implements OnInit, AfterViewInit {
  // 初始值
  initialcounter = 5;
  // @ViewChild 參數傳入型別   後取子組件 建立實體
  @ViewChild(ViewChildChildComponent) viewChildChildComponent: ViewChildChildComponent;

  constructor() { }

  ngOnInit() {
  }
  // 若透過@ViewChild() 存取子組件的public field變數 , 需在生命週期ngAfterViewInit()才抓的到
  ngAfterViewInit() {
    console.log(this.viewChildChildComponent.counter);
  }

  parentPlus() {
    this.viewChildChildComponent.plus();
  }
  parentMinus() {
    this.viewChildChildComponent.minus();
  }
}
