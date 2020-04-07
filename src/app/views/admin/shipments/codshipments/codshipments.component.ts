import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-codshipments',
  templateUrl: './codshipments.component.html',
  styleUrls: ['./codshipments.component.css']
})
export class CodshipmentsComponent implements OnInit {

  public codShipments;

  constructor(private CodShipments: AdminService) { }

  ngOnInit(): void {
    this.getCodShipments();
  }

  getCodShipments() {
    this.CodShipments.fetchCodShipments().subscribe(res => {
      this.codShipments = res.data
    })
  }

}
