import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-travellist',
  templateUrl: './travellist.component.html',
  styleUrls: ['./travellist.component.scss'],
})
export class TravellistComponent implements OnInit {
  data: any;
  constructor(
    private productService: ProductService,
    private notificationService: NzNotificationService,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    console.log(this.userService.getApiKey());

    this.productService.getAllProducts().subscribe(
      (products) => {
        this.productService.setProducts(products);
      },
      ({ error: { mensaje } }) => {
        this.notificationService.error(mensaje, '');
      }
    );

  }
}

