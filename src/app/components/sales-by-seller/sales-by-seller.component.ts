import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';
import { SalesBySellerListComponent } from '../sales-by-seller-list/sales-by-seller-list.component';
import { SalesBySellerQuantityComponent } from '../sales-by-seller-quantity/sales-by-seller-quantity.component';


@Component({
  selector: 'app-sales-by-seller',
  templateUrl: './sales-by-seller.component.html',
  styleUrls: ['./sales-by-seller.component.scss']
})
export class SalesBySellerComponent implements OnInit {

  data :any;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.data = this.salesService.getSalesBySellerApi();
  }

}
