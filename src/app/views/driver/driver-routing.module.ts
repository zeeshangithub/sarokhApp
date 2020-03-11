import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDriverComponent } from './add-driver/add-driver.component';
import { DriversComponent } from './drivers/drivers.component';


const routes: Routes = [
  {
  path: '',
  component: DriversComponent
  },
  {
  path: 'add',
  component: AddDriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
