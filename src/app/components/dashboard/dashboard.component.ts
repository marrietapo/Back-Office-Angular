import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../services/sales.service";
import { ProductService } from '../../services/product.service';
import { Sale } from 'src/app/models/sale';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  sales : Sale[]= [];
  userExists! : boolean;

  constructor(private salesService: SalesService, private productService: ProductService, private userService : UserService) {}

  ngOnInit(): void {
    this.userExists = localStorage.getItem('user') !== null;
    // this.userExists = this.userService.getUserId()!==undefined;
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
