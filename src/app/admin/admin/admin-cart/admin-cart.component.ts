import { Component, OnInit, Input } from '@angular/core';
import { AdminCartService } from './../../admin-services/admin-cart.service';
import { CartItem } from './../../../models/cart-item';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css'],
})
export class AdminCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  totalBill = 0;
  constructor(private _adminCartService: AdminCartService) {}

  ngOnInit(): void {
    this._adminCartService.getCartItem().subscribe((res) => {
      this.cartItems = res;
      this.billing();
    });
  }

  billing() {
    this.totalBill = 0;
    this.cartItems.forEach((item) => {
      this.totalBill += item.qty * item.price;
    });
  }
}
