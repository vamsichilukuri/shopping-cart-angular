import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './../../models/cart-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminCartService {
  private _cartUrl = 'http://localhost:3000/api/cart';

  constructor(private http: HttpClient) {}

  //GET req
  getCartItem(): Observable<CartItem[]> {
    // TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(this._cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExits = false;

          for (let i in cartItems) {
            if (cartItems[i].id === item.id) {
              cartItems[i].qty++;
              productExits = true;
              break;
            }
          }

          if (!productExits) {
            cartItems.push(
              new CartItem(item.id, item.brand, item.image, item.price)
            );
          }
        }
        return cartItems;
      })
    );
  }
}
