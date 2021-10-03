import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[]|any[] = [];
  key: any;

  constructor(private http: HttpClient, private user: UserService) {}

  setProducts(products: any) {
    this.products = products.destinos;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id: number): Product|any {
    return this.products.filter((s) => s.id === id);
  }

  getAllProductsApi() {
    this.key = this.user.getApiKey().toString();
    const headers = {
      'Content-type': 'application/json',
      apikey: this.key,
    };

    return this.http.get('https://destinos.develotion.com/paquetes.php', {
      headers,
    });
  }
}
