import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-travellist',
  templateUrl: './travellist.component.html',
  styleUrls: ['./travellist.component.scss'],
})
export class TravellistComponent implements OnInit {
  data: any;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private notificationService: NzNotificationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {


    this.productService.getAllProductsApi().subscribe(
      (products) => {
        this.productService.setProducts(products);
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje, '');
      }
    );

    this.salesService.getSalesBySellerApi().subscribe(
      (sales) => {
        this.salesService.setSales(sales);
      },
      ({ error: { mensaje } }) => {}
    );


        this.data = this.productService.getProducts();
  }
}

