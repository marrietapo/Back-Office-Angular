import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-by-seller-quantity',
  templateUrl: './sales-by-seller-quantity.component.html',
  styleUrls: ['./sales-by-seller-quantity.component.scss'],
})
export class SalesBySellerQuantityComponent implements OnInit {
  @Input() quantity! :number;


  constructor() {}

  ngOnInit(): void {

  }


}
