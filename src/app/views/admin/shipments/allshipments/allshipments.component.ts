import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-allshipments',
  templateUrl: './allshipments.component.html',
  styleUrls: ['./allshipments.component.css']
})
export class AllshipmentsComponent implements OnInit {

  public allShipments;

  constructor(private AllShipments: AdminService) { }

  ngOnInit(): void {
    this.getAllShipments();
  }

  getAllShipments() {
    this.AllShipments.fetchAllShipments().subscribe(res => {
      this.allShipments = res.data
    })
  }

}
