import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { InitialComponent } from './components/initial/initial.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: InitialComponent,
  },
  {
    path: 'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () =>
    import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
