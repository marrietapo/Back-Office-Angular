import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit {

  respuesta! : any;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {



    this.salesService.getSalesBySellerApi().subscribe(
        (response) => {
          this.respuesta = response;
          this.salesService.setSales(this.respuesta.ventas);
        },
        ({ error: { message } }) => {}
    );


    this.productService.getAllProductsApi().subscribe(
      (products) => {
        this.productService.setProducts(products);
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje, '');
      });
  }


}
