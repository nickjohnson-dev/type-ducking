import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import * as actionTypes from './action-types';

@Injectable()
export default class Effects {
  constructor(private updates$: StateUpdates<any>) {}

  @Effect() notifyDecrement$ = this.updates$
    .whenAction(actionTypes.VALUE_DECREMENTED)
    .do(() => console.log('Value Decremented!'));

  @Effect() notifyIncrement$ = this.updates$
    .whenAction(actionTypes.VALUE_INCREMENTED)
    .do(() => console.log('Value Incremented!'));
}
