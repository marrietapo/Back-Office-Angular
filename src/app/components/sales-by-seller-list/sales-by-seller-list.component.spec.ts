import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySellerListComponent } from './sales-by-seller-list.component';

describe('SalesBySellerListComponent', () => {
  let component: SalesBySellerListComponent;
  let fixture: ComponentFixture<SalesBySellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBySellerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
