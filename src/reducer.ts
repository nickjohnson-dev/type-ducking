import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import app from './ducks/app';

export default combineReducers({
  [app.constants.NAME]: app.reducer,
  router: routerReducer,
});
