import 'es6-shim';
import 'reflect-metadata';
require('zone.js');
import 'rxjs';
import { HashLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@ngrx/router';
import { connectRouterToStore } from '@ngrx/router-store';
import effects from './effects';
import reducer from './reducer';
import { Router, routes } from './router';


bootstrap(Router, [
  provideStore(reducer),
  provideRouter(routes, HashLocationStrategy),
  effects,
  connectRouterToStore(),
]);
