import { combineReducers } from '@ngrx/store';
import { routerActions } from '@ngrx/router-store';
import * as actionTypes from './action-types';

const value = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.VALUE_DECREMENTED:
      return state - 1;
    case actionTypes.VALUE_INCREMENTED:
      return state + 1;
    case routerActions.UPDATE_LOCATION:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({
  value,
});
