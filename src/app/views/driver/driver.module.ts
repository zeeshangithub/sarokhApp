import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DriverRoutingModule } from './driver-routing.module';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { DriversComponent } from './drivers/drivers.component';


@NgModule({
  declarations: [AddDriverComponent, DriversComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DriverRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class DriverModule { }
