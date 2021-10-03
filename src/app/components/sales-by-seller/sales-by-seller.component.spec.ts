import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySellerComponent } from './sales-by-seller.component';

describe('SalesBySellerComponent', () => {
  let component: SalesBySellerComponent;
  let fixture: ComponentFixture<SalesBySellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBySellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
