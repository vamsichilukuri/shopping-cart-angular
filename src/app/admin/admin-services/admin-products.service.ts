import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../../models/product';

@Injectable({
  providedIn: 'root',
})
export class AdminProductsService {
  private _homeUrl = 'http://localhost:3000/api/home';
  private _homeUpdateORDeleteUrl = 'http://localhost:3000/api/home/';
  private _productsUpdateORDeleteUrl = 'http://localhost:3000/api/products/';
  private _productsUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  //POST req to add products  *** HOME  &&  PRODUCTS ***
  sendProducts(product) {
    return this.http.post<any>(this._productsUrl, product);
  }
  sendHomeProducts(product) {
    return this.http.post<any>(this._homeUrl, product);
  }

  //GET req to see products   *** HOME  &&  PRODUCTS ***
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productsUrl);
  }
  getHomeProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._homeUrl);
  }

  //UPDATE && DELETE product details   *** HOME ***
  updateHomeProduct(product) {
    return this.http.put(this._homeUpdateORDeleteUrl + product.id, product);
  }
  deleteHomeProduct(id: number): Observable<void> {
    return this.http.delete<void>(this._homeUpdateORDeleteUrl + id);
  }

  //UPDATE && DELETE product details   *** PRODUCTS ***
  updateProductsPage(product) {
    return this.http.put(this._productsUpdateORDeleteUrl + product.id, product);
  }
  deleteProductsPage(id: number): Observable<void> {
    return this.http.delete<void>(this._productsUpdateORDeleteUrl + id);
  }
}
