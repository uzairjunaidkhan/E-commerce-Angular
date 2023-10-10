import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';

  constructor(public _auth: AuthService, private proService: ProductService) {}

  logOut() {
    this._auth.loggedOut();
  }

  isShow = false;
  searchQuery = '';

  toggleDivs() {
    this.isShow = !this.isShow;
  }
  change() {
    this.proService.setSearchQuery(this.searchQuery)
    // console.log(this.proService.searchText);
  }
}
