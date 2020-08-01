import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from './../../admin-services/admin-products.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-admin-home-products',
  templateUrl: './admin-home-products.component.html',
  styleUrls: ['./admin-home-products.component.css'],
})
export class AdminHomeProductsComponent implements OnInit {
  model: any = {};
  home: Product[] = [];
  constructor(private _adminProdService: AdminProductsService) {}

  ngOnInit(): void {
    this.getProductsFoo();
  }

  getProductsFoo() {
    this._adminProdService.getHomeProducts().subscribe(
      (res) => (this.home = res),
      (err) => console.log(err)
    );
  }

  sendProduct() {
    if (this.model.id) {
      this._adminProdService.updateHomeProduct(this.model).subscribe((res) => {
        console.log(res);
        location.reload();
        window.alert('Updated Successfully');
      });
    } else {
      this._adminProdService.sendHomeProducts(this.model).subscribe((res) => {
        location.reload();
        window.alert('Added Successfully');
      });
    }
  }

  //Edit product
  editProduct(product) {
    this.model.id = product._id;
    this.model.image = product.image;
    this.model.brand = product.brand;
    this.model.price = product.price;
  }

  //Delete product
  deleteProduct(product) {
    this._adminProdService.deleteHomeProduct(product._id).subscribe((res) => {
      console.log(res);
      window.alert('Deleted Successfully');
    });
  }
}
