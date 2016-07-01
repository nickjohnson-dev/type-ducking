import { runEffects } from '@ngrx/effects';
import app from './ducks/app';

export default [
  runEffects(app.effects),
];
