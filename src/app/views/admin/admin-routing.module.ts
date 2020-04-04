import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllLedgersComponent } from './finance/all-ledgers/all-ledgers.component';
import { CodCollectionComponent } from './finance/cod-collection/cod-collection.component';
import { ShipperBillingComponent } from './finance/shipper-billing/shipper-billing.component';
import { DriverPayoutComponent } from './finance/driver-payout/driver-payout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'allLedgers',
    component: AllLedgersComponent,
  },
  {
    path: 'codCollection',
    component: CodCollectionComponent,
  },
  {
    path: 'shipperBilling',
    component: ShipperBillingComponent,
  },
  {
    path: 'driverPayout',
    component: DriverPayoutComponent,
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
