import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CalculatorState } from 'src/app/states/calculator.state';
import * as CalculateAction from 'src/app/actions/calculator.action';
import { CounterState } from 'src/app/states/counter.state';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  value$: Observable<string>;
  count$: Observable<number>;

  constructor(private store: Store<{cal: CalculatorState,counter: CounterState}>) {
    this.value$ = this.store.select((state) => state.cal.currentNumber);
    this.count$ = this.store.select((state) => state.counter.count);
    console.log(this.value$);
  }

  ngOnInit(): void {
  }

  enterNumber(number: string) {
    this.store.dispatch(CalculateAction.enterNumber({number : number}));
  }

  enterOperator(operator: string) {
    this.store.dispatch(CalculateAction.enterOperator({operator : operator}));
  }
}
