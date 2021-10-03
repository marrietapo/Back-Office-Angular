import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-by-seller-quantity',
  templateUrl: './sales-by-seller-quantity.component.html',
  styleUrls: ['./sales-by-seller-quantity.component.scss'],
})
export class SalesBySellerQuantityComponent implements OnInit {
  @Input()
  data:any;
  quantity : any;

  constructor() {}

  ngOnInit(): void {
    this.quantity = this.data.count();
  }
}
