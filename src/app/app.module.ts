import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
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

import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TravelsalesComponent } from './components/travelsales/travelsales.component';
import { TravellistComponent } from './components/travellist/travellist.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzListModule } from 'ng-zorro-antd/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OfferComponent } from './components/offer/offer.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { Page404Component } from './components/page404/page404.component';
import { NzResultModule } from 'ng-zorro-antd/result';

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
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
