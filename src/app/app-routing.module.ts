import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelsalesComponent } from './components/travelsales/travelsales.component';
import { TravellistComponent } from './components/travellist/travellist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OfferComponent } from './components/offer/offer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Page404Component } from './components/page404/page404.component';
import { SalesBySellerComponent } from './components/sales-by-seller/sales-by-seller.component';
import { TravellersByDestinationComponent } from './components/travellers-by-destination/travellers-by-destination.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./components/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'venta', component: TravelsalesComponent, pathMatch: 'full' },
  { path: 'paquetes', component: TravellistComponent, pathMatch: 'full' },
  { path: 'ventas', component: SalesBySellerComponent, pathMatch: 'full' },
  { path: 'destinos-top', component: DestinationComponent, pathMatch: 'full' },
  {
    path: 'viajeros-destino',
    component: TravellersByDestinationComponent,
    pathMatch: 'full',
  },
  { path: 'destinos-promocion', component: OfferComponent, pathMatch: 'full' },
  { path: 'graficos', component: StatisticsComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
