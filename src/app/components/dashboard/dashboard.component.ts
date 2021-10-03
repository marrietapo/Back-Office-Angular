import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../services/sales.service";
import { ProductService } from '../../services/product.service';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  sales : Sale[]= [];
  constructor(private salesService: SalesService, private productService: ProductService) {}

  ngOnInit(): void {

    this.salesService.getSalesBySellerApi().subscribe(
      (sales) => {
        this.salesService.setSales(sales);
      },
      ({ error: { mensaje } }) => {

      }
    );

    this.productService.getAllProductsApi().subscribe(
      (products) =>{
        this.productService.setProducts(products);

      },
      ({error:{mensaje}})=>{

      }
    )

  }


}
