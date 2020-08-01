import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './services/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminDashBoardComponent } from './admin/admin/admin-dash-board/admin-dash-board.component';
import { AdminHomeProductsComponent } from './admin/admin/admin-home-products/admin-home-products.component';
import { AdminCartComponent } from './admin/admin/admin-cart/admin-cart.component';
import { AdminProductsComponent } from './admin/admin/admin-products/admin-products.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashBoardComponent },
  { path: 'admin-home', component: AdminHomeProductsComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-cart', component: AdminCartComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
