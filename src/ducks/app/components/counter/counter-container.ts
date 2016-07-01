import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { Counter } from '../counter/counter';

@Component({
  selector: 'counter-container',
  directives: [Counter],
  template: `
    <counter
      [value]="value | async"
      (decrement)="decrement()"
      (increment)="increment()"
    ></counter>
  `,
})
export class CounterContainer {
  decrement = () => this.store.dispatch(actions.valueDecremented());
  increment = () => this.store.dispatch(actions.valueIncremented());
  store: Store<any>;
  value: Observable<number>;

  constructor(store:Store<any>) {
    this.store = store;
    this.value = store.select(selectors.getValue);
  }
}
