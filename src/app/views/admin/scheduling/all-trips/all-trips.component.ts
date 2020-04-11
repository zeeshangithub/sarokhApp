import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.css']
})
export class AllTripsComponent implements OnInit {

  private allTrips;

  constructor(private AllTrips: AdminService) { }

  ngOnInit(): void {
    this.getAllTrips();
  }

  getAllTrips() {
    this.AllTrips.fetchAllTrips().subscribe(res => {
      this.allTrips = res.data
    })
  }

}
