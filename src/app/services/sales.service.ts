import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from '../models/sale';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  sales!: Sale[];
  key!: string;
  sellerId!: number;

  constructor(private http: HttpClient, private user: UserService) {}

  addSale = (sale: any) => {
    let newSale = new Sale();
    newSale.id = sale.id;
    newSale.id_paquete = sale.id_paquete;
    newSale.nombre_cliente = sale.nombre_cliente;
    newSale.cantidad_menores = sale.cantidad_menores;
    newSale.cantidad_mayores = sale.cantidad_mayores;
    newSale.vendedor_id = this.user.getUserId();
    this.sales = [...this.sales, newSale];
  };

  getSales = () => {
    return this.sales;
  };

  setSales = (sales: any) => {
    console.log(sales);
    this.sales = sales;

  };

  getSalesBySellerApi = () => {
    this.key = this.user.getApiKey().toString();
    this.sellerId = this.user.getUserId();
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
  };
}
