import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelltravelComponent } from './components/selltravel/selltravel.component';
import { TravellistComponent } from './components/travellist/travellist.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'venta', component: SelltravelComponent, pathMatch: 'full' },
  { path: 'paquetes', component: TravellistComponent, pathMatch: 'full' },
  { path: 'ventas', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'destinos-top', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'destinos-promocion', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'graficos', component: WelcomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
