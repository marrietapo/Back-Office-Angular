import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-by-seller-list',
  templateUrl: './sales-by-seller-list.component.html',
  styleUrls: ['./sales-by-seller-list.component.scss'],
})
export class SalesBySellerListComponent implements OnInit {
  @Input()
  data: any;
  constructor() {}

  ngOnInit(): void {

  }
}
