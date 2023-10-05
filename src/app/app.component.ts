import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';

  constructor(public _auth: AuthService) {}

  logOut() {
    this._auth.loggedOut();
  }

  isShow = false;
  value: String = '';

  toggleDivs() {
    this.isShow = !this.isShow;
  }
  change() {
    console.log(this.value);
  }
}
