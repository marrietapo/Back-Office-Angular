import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-sales-by-seller',
  templateUrl: './sales-by-seller.component.html',
  styleUrls: ['./sales-by-seller.component.scss']
})
export class SalesBySellerComponent implements OnInit {

  salesData:any=null;
  productData!:Product[];
  travelsData : any=[];


  quantity!: number;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private userService: UserService,
    private notificationService: NzNotificationService,

  ) { }

  ngOnInit(): void {

    this.travelsData = [];
    this.productData = this.productService.getProducts();
    this.salesData = this.salesService.getSales();
    this.quantity = this.salesData.length;
    this.handleData();


  }


  handleData(){

    this.salesData.forEach((element: {id: number;id_paquete: number;nombre_cliente: string; cantidad_menores: number; cantidad_mayores: number; vendedor_id:number; }) => {
      let paquete: Product[];
      paquete = this.productService.getProductById(element.id_paquete);

      let travel = {
        id: element.id,
        id_paquete: element.id_paquete,
        nombre_paquete: paquete[0].nombre,
        nombre_cliente: element.nombre_cliente,
        cantidad_menores: element.cantidad_menores,
        cantidad_mayores: element.cantidad_mayores,
        vendedor_id: element.vendedor_id,
        precio_menor: paquete[0].precio_menor,
        precio_mayor: paquete[0].precio_mayor
      };

        this.travelsData = [...this.travelsData, travel];
      }
    );

  }


}
