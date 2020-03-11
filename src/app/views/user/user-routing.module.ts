import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddShipmentUserComponent } from './add-shipment-user/add-shipment-user.component';


const routes: Routes = [
  {
		path: '',
		component: UsersComponent,
  },
  {
		path: 'add',
		component: AddUserComponent,
  }
  ,
  {
		path: 'addShipmentUser',
		component: AddShipmentUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
