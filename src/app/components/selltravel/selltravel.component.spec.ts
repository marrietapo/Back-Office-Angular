import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelltravelComponent } from './selltravel.component';

describe('SelltravelComponent', () => {
  let component: SelltravelComponent;
  let fixture: ComponentFixture<SelltravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelltravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelltravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
