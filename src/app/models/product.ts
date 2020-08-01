export class Product {
  id: string;
  brand: string;
  image: string;
  price: number;

  constructor(id, brand, price, image) {
    this.id = id;
    this.brand = brand;
    this.image = image;
    this.price = price;
  }
}
