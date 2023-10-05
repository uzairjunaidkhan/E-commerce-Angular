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
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { AllProductComponent } from './all-product/all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'detail/:id', component: ProductdetailComponent },
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate:[RoleGuard]},
  { path: 'insert-product', component: InsertProductComponent },
  { path: 'all-product', component: AllProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'insert-category', component: InsertCategoryComponent },
  { path: 'all-category', component: AllCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: '**', component: PageNotFounndComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 20]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
