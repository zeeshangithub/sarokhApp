import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AdminComponent } from '../admin/admin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AllLedgersComponent } from './finance/all-ledgers/all-ledgers.component';
import { CodCollectionComponent } from './finance/cod-collection/cod-collection.component';
import { ShipperBillingComponent } from './finance/shipper-billing/shipper-billing.component';
import { DriverPayoutComponent } from './finance/driver-payout/driver-payout.component';
import { LedgerDetailComponent } from './finance/ledger-detail/ledger-detail.component';



@NgModule({
  declarations: [DashboardComponent, AdminComponent, AllLedgersComponent, CodCollectionComponent, ShipperBillingComponent, DriverPayoutComponent, LedgerDetailComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AdminRoutingModule
  ]
})
export class AdminModule { }
