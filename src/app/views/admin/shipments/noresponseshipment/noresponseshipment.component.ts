import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-noresponseshipment',
  templateUrl: './noresponseshipment.component.html',
  styleUrls: ['./noresponseshipment.component.css']
})
export class NoresponseshipmentComponent implements OnInit {

  public noResponseShipments;

  constructor(private NoResponseShipments: AdminService) { }

  ngOnInit(): void {
    this.getNoResponseShipments();
  }

  getNoResponseShipments() {
    this.NoResponseShipments.fetchNoResponseShipments().subscribe(res => {
      this.noResponseShipments = res.data
    })
  }

}
