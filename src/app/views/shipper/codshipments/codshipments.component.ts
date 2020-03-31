import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';

@Component({
  selector: 'app-codshipments',
  templateUrl: './codshipments.component.html',
  styleUrls: ['./codshipments.component.css']
})
export class CodshipmentsComponent implements OnInit {

  public codShipmentList;

  constructor(private inventory: ShipperService) { }


  ngOnInit(): void {
    this.getcodShipmentList();
  }
  getcodShipmentList() {
    this.inventory.fetchCodShipment().subscribe(res => {
      this.codShipmentList = res.data
    })
  }

}
