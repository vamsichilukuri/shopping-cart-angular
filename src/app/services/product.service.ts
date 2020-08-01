import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const path = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private _homeUrl = 'http://localhost:3000/api/home';
  private _homeUrl = path + 'home';
  // private _productsUrl = 'http://localhost:3000/api/products';
  private _productsUrl = path + 'products';

  constructor(private http: HttpClient) {}

  //GET req to see products
  getHome(): Observable<Product[]> {
    return this.http.get<Product[]>(this._homeUrl);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._productsUrl);
  }
}
