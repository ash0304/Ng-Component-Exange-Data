import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.scss']
})
export class ViewChildChildComponent implements OnInit {
  @Input() initialcounter;
  counter: number;

  constructor() { }

  ngOnInit() {
    // setter
    this.counter = this.initialcounter;
  }

  plus() {
    this.counter++;
  }

  minus() {
    this.counter--;
  }

}
