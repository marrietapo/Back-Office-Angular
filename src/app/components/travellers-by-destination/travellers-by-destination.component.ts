import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-travellers-by-destination',
  templateUrl: './travellers-by-destination.component.html',
  styleUrls: ['./travellers-by-destination.component.scss'],
})
export class TravellersByDestinationComponent implements OnInit {
  salesData: any = null;
  productData!: Product[];
  travelsData: any = [];

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.travelsData = [];
    this.productData = this.productService.getProducts();
    this.salesData = this.salesService.getSales();
    this.handleData();
  }

  handleData() {
    this.productData.forEach(
      (element) => {
        let ventas =this.salesService.getSalesByProductId(element.id);
        let quantity = ventas.reduce((a: any , val: { cantidad_menores: number; cantidad_mayores: number; }) => (a += (val.cantidad_menores + val.cantidad_mayores)), 0);

        let travel = {
          id: element.id,
          nombre: element.nombre,
          quantity: quantity
        };

        this.travelsData = [...this.travelsData, travel];
      }
    );
  }
}
