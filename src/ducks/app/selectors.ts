import { NAME } from './constants';

const get = state => state[NAME];

export const getValue = state => get(state).value;
