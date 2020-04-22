import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { AddShipperComponent } from './add-shipper/add-shipper.component';


@NgModule({
  declarations: [AddShipperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule
  ]
})
export class ShipperModule { }
