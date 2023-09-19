import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { PageNotFounndComponent } from './page-not-founnd/page-not-founnd.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { InsertCategoryComponent } from './insert-category/insert-category.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'detail/:id', component: ProductdetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'insert-product', component: InsertProductComponent },
  { path: 'insert-category', component: InsertCategoryComponent },
  { path: '**', component: PageNotFounndComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
