import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-returnshipments',
  templateUrl: './returnshipments.component.html',
  styleUrls: ['./returnshipments.component.css']
})
export class ReturnshipmentsComponent implements OnInit {

  public returnedShipments;

  constructor(private ReturnedShipments: AdminService) { }

  ngOnInit(): void {
    this.getReturnedShipments();
  }

  getReturnedShipments() {
    this.ReturnedShipments.fetchReturnedShipments().subscribe(res => {
      this.returnedShipments = res.data
    })
  }

}
