import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';
import { AddsarokhwearhouseComponent } from './sarokhWearhouse/addsarokhwearhouse/addsarokhwearhouse.component';
import { SarokhwearhouselistComponent } from './sarokhWearhouse/sarokhwearhouselist/sarokhwearhouselist.component';

import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { DataService } from '../../services/data.service';

import { HighchartsChartComponent } from 'highcharts-angular';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ReturnshipmentsComponent } from './returnshipments/returnshipments.component';
import { ShipperLedgerComponent } from './shipper-ledger/shipper-ledger.component';
import { AddShipperLedgerComponent } from './add-shipper-ledger/add-shipper-ledger.component';
@NgModule({
  declarations: [AddShipperComponent, ShippersComponent, AddshipperwearhouseComponent, ShipperwearhouselistComponent, AddsarokhwearhouseComponent, SarokhwearhouselistComponent, ShipperDashboardComponent, ShipmentsComponent, ReturnshipmentsComponent, ShipperLedgerComponent, AddShipperLedgerComponent , HighchartsChartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    // HighchartsChartComponent
  ],
  providers: [DataService]
})
export class ShipperModule { }
