import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TravellistComponent } from '../travellist/travellist.component';
import { DestinationComponent } from '../destination/destination.component';
import { OfferComponent } from '../offer/offer.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { Page404Component } from '../page404/page404.component';
import { TravelsalesComponent } from '../travelsales/travelsales.component';
import { SalesBySellerComponent } from '../sales-by-seller/sales-by-seller.component';
import { SalesBySellerQuantityComponent } from '../sales-by-seller-quantity/sales-by-seller-quantity.component';
import { SalesBySellerListComponent } from '../sales-by-seller-list/sales-by-seller-list.component';
import { TravellersByDestinationComponent } from '../travellers-by-destination/travellers-by-destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from 'src/app/icons-provider.module';
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
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzSpaceModule } from 'ng-zorro-antd/space';



@NgModule({
  declarations: [
    TravellistComponent,
    DestinationComponent,
    OfferComponent,
    StatisticsComponent,
    Page404Component,
    TravelsalesComponent,
    SalesBySellerComponent,
    SalesBySellerQuantityComponent,
    SalesBySellerListComponent,
    TravellersByDestinationComponent,
  ],

  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
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
    NgApexchartsModule,
    NzSpaceModule,
  ],
})
export class DashboardModule {}
