import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { AddCartService } from './../../services/add-cart.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  home: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _addCart: AddCartService
  ) {}

  ngOnInit(): void {
    this._productService.getHome().subscribe(
      (res) => (this.home = res),
      (err) => console.log(err)
    );
  }
}
