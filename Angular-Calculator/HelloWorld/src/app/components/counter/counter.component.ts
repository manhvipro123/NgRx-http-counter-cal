import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/states/counter.state';
import * as CounterAction from 'src/app/actions/counter.action';
import { CalculatorState } from 'src/app/states/calculator.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  cal$: Observable<string>;
  constructor(private store: Store<{counter:CounterState,cal: CalculatorState}>) { 
    this.count$ = this.store.select((state) => state.counter.count);
    this.cal$ = this.store.select((state) => state.cal.currentNumber);
    console.log(this.count$);
  }

  ngOnInit(): void {
  }

  increment(){
    this.store.dispatch(CounterAction.increment());
  }

  decrement(){
    this.store.dispatch(CounterAction.decrement());
  }

  reset(){
    this.store.dispatch(CounterAction.reset());
  }

}
