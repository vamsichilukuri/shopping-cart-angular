import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './services/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { HomeItemComponent } from './components/home/home-item/home-item.component';
import { AddCartService } from './services/add-cart.service';

import { CartService } from './services/cart.service';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminDashBoardComponent } from './admin/admin/admin-dash-board/admin-dash-board.component';
import { AdminHeaderComponent } from './admin/admin/admin-header/admin-header.component';
import { AdminCartComponent } from './admin/admin/admin-cart/admin-cart.component';
import { AdminHomeProductsComponent } from './admin/admin/admin-home-products/admin-home-products.component';
import { AdminProductsComponent } from './admin/admin/admin-products/admin-products.component';
import { AdminProductsService } from './admin/admin-services/admin-products.service';
import { AdminCartService } from './admin/admin-services/admin-cart.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    HomeItemComponent,
    AdminDashBoardComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminCartComponent,
    AdminHomeProductsComponent,
    AdminProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ProductService,
    AddCartService,
    AdminProductsService,
    AdminCartService,
    CartService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
