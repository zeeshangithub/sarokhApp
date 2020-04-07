import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-prepeaidshipments',
  templateUrl: './prepeaidshipments.component.html',
  styleUrls: ['./prepeaidshipments.component.css']
})
export class PrepeaidshipmentsComponent implements OnInit {

  public prepaidShipments;

  constructor(private PrepaidShipments: AdminService) { }

  ngOnInit(): void {
    this.getPrepaidShipments();
  }

  getPrepaidShipments() {
    this.PrepaidShipments.fetchPrepaidShipments().subscribe(res => {
      this.prepaidShipments = res.data
    })
  }

}
