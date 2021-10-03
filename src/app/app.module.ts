import { NgModule } from '@angular/core';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCardModule } from 'ng-zorro-antd/card';

import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OfferComponent } from './components/offer/offer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SalesBySellerComponent } from './components/sales-by-seller/sales-by-seller.component';
import { SalesBySellerQuantityComponent } from './components/sales-by-seller-quantity/sales-by-seller-quantity.component';
import { SalesBySellerListComponent } from './components/sales-by-seller-list/sales-by-seller-list.component';
import { Page404Component } from './components/page404/page404.component';
import { TravelsalesComponent } from './components/travelsales/travelsales.component';
import { TravellistComponent } from './components/travellist/travellist.component';
import { InitialComponent } from './components/initial/initial.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    SingupComponent,
    WelcomeComponent,
    TravellistComponent,
    DashboardComponent,
    DestinationComponent,
    OfferComponent,
    StatisticsComponent,
    Page404Component,
    TravelsalesComponent,
    SalesBySellerComponent,
    SalesBySellerQuantityComponent,
    SalesBySellerListComponent,
    InitialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzTabsModule,
    NzToolTipModule,
    NzDropDownModule,
    NzInputNumberModule,
    NzNotificationModule,
    NzListModule,
    NzResultModule,
    NzSelectModule,
    NzStatisticModule,
    NzCardModule,
    NzAvatarModule,
    NzDividerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
