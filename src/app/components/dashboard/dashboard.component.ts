import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../services/sales.service";
import { ProductService } from '../../services/product.service';
import { Sale } from 'src/app/models/sale';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  sales : Sale[]= [];
  respuesta!:any;

  constructor(private salesService: SalesService, private productService: ProductService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {


    this.salesService.getSalesBySellerApi().subscribe(
      (response) => {
        this.respuesta = response;
        this.salesService.setSales(this.respuesta.ventas);
      },
      ({ error: { mensaje } }) => {

      }
    );

    this.productService.getAllProductsApi().subscribe(
      (response) =>{
        this.productService.setProducts(response);
      },
      ({error:{mensaje}})=>{

      }
    )


  }

  logout = ()=>{
    this.localStorageService.logout();
  }

}
