import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from '../destination/destination.component';
import { OfferComponent } from '../offer/offer.component';
import { SalesBySellerComponent } from '../sales-by-seller/sales-by-seller.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TravellersByDestinationComponent } from '../travellers-by-destination/travellers-by-destination.component';
import { TravellistComponent } from '../travellist/travellist.component';
import { TravelsalesComponent } from '../travelsales/travelsales.component';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'venta', component: SalesBySellerComponent },
      { path: 'paquetes', component: TravellistComponent },
      { path: 'ventas', component: TravelsalesComponent },
      { path: 'viajeros-destino', component: TravellersByDestinationComponent },
      { path: 'destinos-top', component: DestinationComponent },
      { path: 'destinos-promocion', component: OfferComponent },
      { path: 'graficos', component: StatisticsComponent },
      { path:"", redirectTo:"/dashboard/venta" , pathMatch:"full" }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
