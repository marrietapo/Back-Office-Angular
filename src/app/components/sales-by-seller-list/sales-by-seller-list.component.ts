import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-by-seller-list',
  templateUrl: './sales-by-seller-list.component.html',
  styleUrls: ['./sales-by-seller-list.component.scss'],
})
export class SalesBySellerListComponent implements OnInit {

  @Input() travelsData: any;

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private notificationService: NzNotificationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {

  }
}
