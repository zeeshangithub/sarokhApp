import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';

import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { DataService } from '../../services/data.service';

import { HighchartsChartComponent } from 'highcharts-angular';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ReturnshipmentsComponent } from './returnshipments/returnshipments.component';
import { ShipperLedgerComponent } from './shipper-ledger/shipper-ledger.component';
import { AddShipperLedgerComponent } from './add-shipper-ledger/add-shipper-ledger.component';
import { CodshipmentsComponent } from './codshipments/codshipments.component';
import { ShipmentissueComponent } from './shipmentissue/shipmentissue.component';
import { NgxPrintModule } from 'ngx-print';
import { PrintlablesComponent } from './printlables/printlables.component';
import { AgmCoreModule } from '@agm/core';
import { PrintbulkshipmentComponent } from './printbulkshipment/printbulkshipment.component';
@NgModule({
  declarations: [AddShipperComponent, ShippersComponent, AddshipperwearhouseComponent, ShipperwearhouselistComponent, ShipperDashboardComponent, ShipmentsComponent, ReturnshipmentsComponent, ShipperLedgerComponent, AddShipperLedgerComponent , CodshipmentsComponent, ShipmentissueComponent, PrintlablesComponent, PrintbulkshipmentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    NgxPrintModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw',
    })
  ],
  providers: [DataService],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShipperModule { }
