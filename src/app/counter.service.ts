import { Injectable } from '@angular/core';
import { InitialCounterInterface } from './interface/initial-counter.interface';
import { ChangeCounterInterface } from './interface/change.counter.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements InitialCounterInterface, ChangeCounterInterface {
  private counterStore: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter: Observable<number> = this.counterStore;
  constructor() { }

  setInitialCounter(initialCounter: number) {
    this.counterStore.next(initialCounter);
  }
  add() {
    this.counterStore.next(this.counterStore.getValue() + 1);
  }
  minus() {
    this.counterStore.next(this.counterStore.getValue() - 1);
  }
}
