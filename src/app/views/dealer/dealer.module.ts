import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DealerRoutingModule } from './dealer-routing.module';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealersComponent } from './dealers/dealers.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';


@NgModule({
  declarations: [AddDealerComponent, DealersComponent, DealerDashboardComponent],
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
