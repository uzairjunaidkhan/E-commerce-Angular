import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { PageNotFounndComponent } from './page-not-founnd/page-not-founnd.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { InsertCategoryComponent } from './insert-category/insert-category.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenComponent,
    WomenComponent,
    PageNotFounndComponent,
    ProductdetailComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    InsertProductComponent,
    InsertCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
