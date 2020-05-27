import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { AddBusinessComponent } from './add-business/add-business.component';


@NgModule({
  declarations: [AddShipperComponent, AddBusinessComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlNativeDateTimeModule,
    OwlDateTimeModule,
    ReactiveFormsModule
  ]
})
export class ShipperModule { }
