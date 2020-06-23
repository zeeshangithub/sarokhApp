import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {

  private allVehicles;

  constructor(private AllVehicles: AdminService) { }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.AllVehicles.fetchAllVehicles().subscribe(res => {
      this.allVehicles = res.data
    })
  }

}
