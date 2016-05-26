import { Component, OnInit } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import {AuthService} from '../auth.service'


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})


export class DashboardComponent implements OnInit {


  constructor(private auth: AuthService, private authHttp: AuthHttp) {
  }

  ngOnInit() {
    this.getSecretThing();
    window['xxx'] = function (data) {
      console.log(data);
    }
  }

  getSecretThing() {
    console.log(this.auth.user);
    // const accessToken = this.auth.user['identities'][0].access_token;
    // let xxx = function(data) {
    //   console.log(data);
    // }
    this.authHttp.get(`https://api.instagram.com/v1/tags/cats/media/recent`)
    // this.jsonp.request(`https://api.instagram.com/v1/tags/cats/media/recent?access_token=${accessToken}&callback=window.xxx`)
    // this.authHttp.post('https://api.instagram.com/oauth/access_token', null)
      .subscribe(
      data => console.log(data.json()),
      err => console.log(err),
      () => console.log('Complete')
      );
  }


}
