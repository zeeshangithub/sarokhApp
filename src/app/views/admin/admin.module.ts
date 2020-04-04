import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AdminComponent } from '../admin/admin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AllLedgersComponent } from './finance/all-ledgers/all-ledgers.component';



@NgModule({
  declarations: [DashboardComponent, AdminComponent , AllLedgersComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AdminRoutingModule
  ]
})
export class AdminModule { }
