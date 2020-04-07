import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-deliverdshipments',
  templateUrl: './deliverdshipments.component.html',
  styleUrls: ['./deliverdshipments.component.css']
})
export class DeliverdshipmentsComponent implements OnInit {

  public deliverdShipments;

  constructor(private DeliverdShipments: AdminService) { }

  ngOnInit(): void {
    this.getDeliverdShipments();
  }

  getDeliverdShipments() {
    this.DeliverdShipments.fetchDeliverdShipments().subscribe(res => {
      this.deliverdShipments = res.data
    })
  }

}
