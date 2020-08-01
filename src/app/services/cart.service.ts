import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { map } from 'rxjs/operators';

const path = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private _cartUrl = 'http://localhost:3000/api/cart';
  private _cartUrl = path + 'cart';
  // private _cartdltUrl = 'http://localhost:3000/api/cart/';
  private _cartdltUrl = path + 'cart/';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  //POST req
  addToMyCart(item: Product): Observable<any> {
    return this.http.post<any>(this._cartUrl, item);
  }
  // DELETE req
  deleteFromCart(id: number): Observable<void> {
    return this.http.delete<void>(this._cartdltUrl + id);
  }
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
