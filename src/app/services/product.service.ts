import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { LocalStorageService } from './local-storage.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[]|any[] = [];
  key: any;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  setProducts(products: any) {
    this.products = products.destinos;
  }

  getProducts() {
    if(this.products.length===0){
      this.setProducts(this.getAllProductsApi());
    }
    return this.products;
  }

  getProductById(id: number): Product|any {
    return this.products.filter((s) => s.id === id);
  }

  getAllProductsApi() {
    this.key = this.localStorageService.getLocalStorageApiKey();
    const headers = {
      'Content-type': 'application/json',
      apikey: this.key,
    };

    return this.http.get('https://destinos.develotion.com/paquetes.php', {
      headers,
    });
  }


}
