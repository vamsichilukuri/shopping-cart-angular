import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems = [];

  constructor(
    public _authService: AuthService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadCartCount();
  }

  loadCartCount() {
    setInterval(() => {
      this._cartService.getCartItem().subscribe((items: CartItem[]) => {
        this.cartItems = items;
      });
    }, 100);
  }
}
