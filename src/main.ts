import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { BeesKneesAppComponent, environment } from './app/';

import { Routes, Router, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, OnActivate } from '@angular/router';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { HTTP_PROVIDERS, JSONP_PROVIDERS, Http,HTTP_BINDINGS } from '@angular/http';
import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';
// import { AUTH_PROVIDERS } from 'angular2-jwt';


if (environment.production) {
  enableProdMode();
}

bootstrap(BeesKneesAppComponent, [
  FIREBASE_PROVIDERS,
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  HTTP_BINDINGS,
  AUTH_PROVIDERS,
  ROUTER_PROVIDERS,
  defaultFirebase('https://bees-knees.firebaseio.com'),

  // provide(AuthHttp, {
  //   useFactory: (http) => {
  //     return new AuthHttp(config, http);
  //   },
  //   deps: [Http]
  // })
  // provide(AuthConfig, {
  //   useValue: new AuthConfig()
  // }),
  // provide(AuthHttp, {
  //   useFactory: (http) => {
  //     return new AuthHttp(new AuthConfig(), http);
  //   },
  //   deps: [Http]
  // })
  // provide(AuthHttp, { useFactory: () => {
  //   return new AuthHttp(null, null);
  // }})
  //AuthHttp
]);
