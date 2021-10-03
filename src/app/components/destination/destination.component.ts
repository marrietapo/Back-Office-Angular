import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  salesData!: Sale[];
  productData!: Product[];
  travelsData: any = [];

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
  ) {}

  ngOnInit(): void {
    this.travelsData = [];
    this.productData = this.productService.getProducts();
    this.salesData = this.salesService.getSales();
    this.handleData();
  }

  handleData() {
    this.productData.forEach((element) => {
      let ventas = this.salesService.getSalesByProductId(element.id);


      let travel = {
        id: element.id,
        nombre: element.nombre,
        //quantity: quantity,
      };

      this.travelsData = [...this.travelsData, travel];
    });
  }
}
