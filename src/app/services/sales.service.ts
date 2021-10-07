import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  sales: Sale[] | any[] = [];
  key!: any;
  sellerId!: any;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}



  addSale = (newSale: Sale) => {
    this.sales = [...this.sales, newSale];
  };

  getSales = () => {
    if (this.sales.length === 0) {
      this.setSales(this.getSalesBySellerApi());
    }
    return this.sales;
  };

  getSalesByProductId = (id: number): Sale | any => {
    return this.sales.filter((s) => s.id_paquete === id);
  };

  setSales = (sales: any) => {
    this.sales = sales;
  };

  getSalesBySellerApi = () => {
    this.key = this.localStorageService.getLocalStorageApiKey();
    this.sellerId = this.localStorageService.getLocalStorageUserId();
    const headers = {
      'Content-type': 'application/json',
      apikey: this.key,
    };

    return this.http.get(
      'https://destinos.develotion.com/ventas.php?idVendedor=' + this.sellerId,
      {
        headers,
      }
    );
  };

  addSaleApi = (
    client: string,
    packageId: number,
    childs: number,
    adults: number
  ) => {
    this.key = this.localStorageService.getLocalStorageApiKey();
    this.sellerId = this.localStorageService.getLocalStorageUserId();
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
  };
}
