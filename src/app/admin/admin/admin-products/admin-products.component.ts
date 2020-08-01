import { Component, OnInit } from '@angular/core';
import { AdminProductsService } from './../../admin-services/admin-products.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  model: any = {};
  products: Product[] = [];

  constructor(private _adminProdService: AdminProductsService) {}

  ngOnInit(): void {
    this.getProductsFoo();
  }

  getProductsFoo() {
    this._adminProdService.getProducts().subscribe(
      (res) => (this.products = res),
      (err) => console.log(err)
    );
  }

  sendProduct() {
    if (this.model.id) {
      this._adminProdService.updateProductsPage(this.model).subscribe((res) => {
        console.log(res);
        location.reload();
        window.alert('Updated Successfully');
      });
    } else {
      this._adminProdService.sendProducts(this.model).subscribe(() => {
        location.reload();
        window.alert('Uploaded Successfully');
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
    this._adminProdService.deleteProductsPage(product._id).subscribe((res) => {
      location.reload();
      window.alert('Deleted Successfully');
    });
  }
}
