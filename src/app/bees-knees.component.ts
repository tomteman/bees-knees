import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Http} from '@angular/http';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LandingComponent } from './landing/landing.component'
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from './auth.service';


declare var Auth0Lock;

@Component({
  moduleId: module.id,
  selector: 'bees-knees-app',
  templateUrl: 'bees-knees.component.html',
  styleUrls: ['bees-knees.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService],
})

@Routes([
  {path: '/landing',  component: LandingComponent},
  {path: '/dashboard',  component: DashboardComponent},
])
export class BeesKneesAppComponent implements OnInit{
  items: FirebaseListObservable<any[]>;
  auth: AuthService;
  lock = new Auth0Lock('Pmr6PJ7LeXrrK2LlqHeQSN8TdMsAybUu', 'bees-knees.auth0.com');

  constructor(af: AngularFire, auth: AuthService) {
    this.items = af.database.list('/items');
    this.auth = auth;
    console.log(auth);
  }



  addItem() {
    const a = new Date().getTime();
    this.items.push({date: a, name: 'bla bla'});

  }

  removeAll() {
    this.items.remove();
  }

  remove(item) {
    this.items.remove(item.$key);
  }

  ngOnInit() {

  }

  title = 'bees-knees works!';
}
