import { Component, OnInit, Input } from '@angular/core';
import { AdminCartService } from './../../admin-services/admin-cart.service';
import { CartItem } from './../../../models/cart-item';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  cartItems = [];
  constructor(
    private _adminCartService: AdminCartService,
    public _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadCartCount();
  }
  loadCartCount() {
    setInterval(() => {
      this._adminCartService.getCartItem().subscribe((items: CartItem[]) => {
        this.cartItems = items;
      });
    }, 100);
  }
}
