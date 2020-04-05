import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DealerRoutingModule } from './dealer-routing.module';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { ViewdealerpointComponent } from './viewdealerpoint/viewdealerpoint.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ServiceschargesComponent } from './servicescharges/servicescharges.component';
import { CodreturnsComponent } from './codreturns/codreturns.component';
// import { HighchartsChartComponent } from 'highcharts-angular';


@NgModule({
  declarations: [DealerDashboardComponent, ViewdealerpointComponent, InventoryComponent, ServiceschargesComponent, CodreturnsComponent],
  imports: [
    CommonModule,
    DealerRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule
  ]
})
export class DealerModule { }
