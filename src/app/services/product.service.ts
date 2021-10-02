import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any;
  key:any;

  constructor(private http: HttpClient, private user : UserService) {}

  setProducts(products : any){
    this.products = products;
  }

  getProducts(){
    return this.products;
  }

  getAllProductsApi(){
    this.key = this.user.getApiKey().toString();
    const headers = {
      'Content-type': 'application/json',
      'apikey': this.key
    };

    return this.http.get('https://destinos.develotion.com/paquetes.php', {
      headers
    });
  }

}
