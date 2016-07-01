import { Route } from '@ngrx/router';
import { Component } from '@angular/core';
import app from './ducks/app';

const { App, CounterContainer } = app.components;

@Component({
  selector: 'router',
  template: '<route-view></route-view>',
})
export class Router {}

export const routes: Route[] = [
  {
    path: '/',
    component: App,
    redirectTo: '/counter',
    children: [
      {
        path: 'counter',
        component: CounterContainer,
      },
    ],
  },
  {
    path: '/**',
    redirectTo: '/counter',
  },
];
