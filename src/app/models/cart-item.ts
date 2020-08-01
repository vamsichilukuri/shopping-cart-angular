export class CartItem {
  id: string;
  brand: string;
  image: string;
  price: number;
  qty: number;

  constructor(id, brand, image, price, qty = 1) {
    this.id = id;
    this.brand = brand;
    this.image = image;
    this.price = price;
    this.qty = qty;
  }
}
