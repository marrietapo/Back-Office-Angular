import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsalesComponent } from './travelsales.component';

describe('TravelsalesComponent', () => {
  let component: TravelsalesComponent;
  let fixture: ComponentFixture<TravelsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
