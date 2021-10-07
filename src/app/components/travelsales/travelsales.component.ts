import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Sale } from 'src/app/models/sale';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-travelsales',
  templateUrl: './travelsales.component.html',
  styleUrls: ['./travelsales.component.scss'],
})
export class TravelsalesComponent implements OnInit {
  childValue!: number;
  adultValue!: number;
  selectedValue!:number;
  validateForm!: FormGroup;
  data!: any[];
  respuesta: any;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    const { cliente, menores, adultos, paquete } = this.validateForm.value;
    if(cliente&&menores>=0&&adultos>0&&paquete){
      this.salesService
        .addSaleApi(
          cliente,
          paquete,
          menores,
          adultos
        )
        .subscribe(
          (response) => {
            this.respuesta = response as any;
            if(this.respuesta.codigo === 200){
              this.handleNewSale(response, adultos, menores, Number.parseInt(paquete), cliente);
              this.router.navigate(['/dashboard/ventas']);
            }
            this.notificationService.success(this.respuesta.mensaje, '');
          },
          ({ error: { mensaje } }) => {
            this.notificationService.error(mensaje, '');
          }
        );
    }
  }

  handleNewSale(response:any, mayores:number, menores:number, paquete: number, cliente:string){
    let sale = new Sale();
    sale.id = response.idVenta;
    sale.cantidad_mayores = mayores;
    sale.cantidad_menores = menores;
    sale.id_paquete = paquete;
    sale.nombre_cliente = cliente;
    sale.vendedor_id = this.localStorageService.getLocalStorageUserId() ;
    this.salesService.addSale(sale);
  }


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private salesService: SalesService,
    private localStorageService: LocalStorageService,
    private notificationService: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts();
    this.salesService.getSales();
    this.validateForm = this.fb.group({
      cliente: [null, [Validators.required]],
      menores:[null, [Validators.required]],
      adultos:[null, [Validators.required]],
      paquete:[null, [Validators.required]]


    });

    this.data = this.productService.getProducts();


  }
}
