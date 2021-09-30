import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelltravelComponent } from './components/selltravel/selltravel.component';
import { TravellistComponent } from './components/travellist/travellist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OfferComponent } from './components/offer/offer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'venta', component: SelltravelComponent, pathMatch: 'full' },
  { path: 'paquetes', component: TravellistComponent, pathMatch: 'full' },
  { path: 'ventas', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'destinos-top', component: DestinationComponent, pathMatch: 'full' },
  {
    path: 'destinos-promocion',
    component: OfferComponent,
    pathMatch: 'full',
  },
  { path: 'graficos', component: StatisticsComponent, pathMatch: 'full' },
  { path: '**', component: Page404Component, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
