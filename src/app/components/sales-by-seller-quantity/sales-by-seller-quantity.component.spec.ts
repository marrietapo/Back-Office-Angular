import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySellerQuantityComponent } from './sales-by-seller-quantity.component';

describe('SalesBySellerQuantityComponent', () => {
  let component: SalesBySellerQuantityComponent;
  let fixture: ComponentFixture<SalesBySellerQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBySellerQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySellerQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
