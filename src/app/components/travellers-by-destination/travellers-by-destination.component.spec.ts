import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellersByDestinationComponent } from './travellers-by-destination.component';

describe('TravellersByDestinationComponent', () => {
  let component: TravellersByDestinationComponent;
  let fixture: ComponentFixture<TravellersByDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellersByDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellersByDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
