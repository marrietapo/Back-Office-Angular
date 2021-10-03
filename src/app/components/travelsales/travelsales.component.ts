import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Sale } from 'src/app/models/sale';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-travelsales',
  templateUrl: './travelsales.component.html',
  styleUrls: ['./travelsales.component.scss'],
})
export class TravelsalesComponent implements OnInit {
  childValue: number = 0;
  adultValue: number = 1;
  selectedValue: number = 0;
  validateForm!: FormGroup;
  data: any;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.salesService
      .addSaleApi(
        this.validateForm.value,
        this.selectedValue,
        this.childValue,
        this.adultValue
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.notificationService.success('Venta efectuada correctamente', '');

          this.salesService.addSale(
            new Sale()
          );
          this.router.navigate(['/paquetes']);
        },
        ({ error: { mensaje } }) => {
          this.notificationService.error(mensaje, '');
        }
      );
  }

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private salesService: SalesService,
    private userService: UserService,
    private notificationService: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
    });

    this.data = this.productService.getProducts();


  }
}
