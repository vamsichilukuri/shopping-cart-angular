import { Component, OnInit } from '@angular/core';
import { AddCartService } from './../../services/add-cart.service';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from './../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  prodCount: number;

  subscription: Subscription;

  constructor(
    private _addCart: AddCartService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.subscription = this._addCart.getData.subscribe((item) =>
      this.loadCartItems()
    );
  }

  loadCartItems() {
    this._cartService.getCartItem().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
