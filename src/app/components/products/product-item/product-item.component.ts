import { Component, OnInit, Input } from '@angular/core';
import { AddCartService } from './../../../services/add-cart.service';
import { Product } from './../../../models/product';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private _addCart: AddCartService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadStripe();
  }

  OnAddCart(product) {
    this.cartService.addToMyCart(product).subscribe(() => {
      this._addCart.callData(product);
    });
  }

  payItem(amount) {
    console.log(amount);
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert('Token Created!!');
      },
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100,
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }
}
