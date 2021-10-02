import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  sales: Sale[] = [];
  key: any;
  sellerId: any;

  constructor(private http: HttpClient, private user: UserService) {}


  addSale(sale: Sale) {
    this.sales = [...this.sales, sale];
  }

  getSales() {
    return this.sales;
  }

  setSales( sales: Sale[]) {
    this.sales = sales;
  }

  getSalesBySellerApi(sellerId: number) {
    this.key = this.user.getApiKey().toString();
    const headers = {
      'Content-type': 'application/json',
      apikey: this.key,
    };

    return this.http.get(
      'https://destinos.develotion.com/ventas.php?idVendedor=' + sellerId,
      {
        headers,
      }
    );
  }

  addSaleApi(
    client: string,
    packageId: number,
    childs: number,
    adults: number
  ) {
    this.key = this.user.getApiKey().toString();
    this.sellerId = this.user.getUserId();
    const headers = {
      'Content-type': 'application/json',
      apikey: this.key,
    };
    const body = JSON.stringify({
      idVendedor: this.sellerId,
      nombreCliente: client,
      idPaquete: packageId,
      cantidadMayores: adults,
      cantidadMenores: childs,
    });

    return this.http.post('https://destinos.develotion.com/ventas.php?', body, {
      headers,
    });
  }
}
