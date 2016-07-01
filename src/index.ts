import 'es6-shim';
import 'reflect-metadata';
require('zone.js');
import 'rxjs';
import { bootstrap } from '@angular/platform-browser-dynamic';
import app from './ducks/app';

const { App } = app.components;

bootstrap(App);
