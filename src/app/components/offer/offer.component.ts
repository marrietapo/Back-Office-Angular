import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  salesData!: Sale[];
  productData!: Product[];
  travelsData: any = [];

  constructor(
    private productService: ProductService,
    private salesService: SalesService
  ) {}

  ngOnInit(): void {
    this.travelsData = [];
    this.productData = this.productService.getProducts();
    this.salesData = this.salesService.getSales();
    this.handleData();
  }

  handleData() {
    this.productData.forEach((element) => {
      let ventas: Sale[] = this.salesService.getSalesByProductId(element.id);
      if (ventas.length == 0) {
        let travel = {
          id: element.id,
          nombre: element.nombre,
          quantity: ventas.length,
        };
        this.travelsData = [...this.travelsData, travel];
      }
    });
  }
}

