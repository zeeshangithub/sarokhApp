import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-active-trips',
  templateUrl: './active-trips.component.html',
  styleUrls: ['./active-trips.component.css']
})
export class ActiveTripsComponent implements OnInit {

  private activeTrips;

  constructor(private ActiveTrips: AdminService) { }

  ngOnInit(): void {
    this.getActiveTrips();
  }

  getActiveTrips() {
    this.ActiveTrips.fetchActiveTrips().subscribe(res => {
      this.activeTrips = res.data
    })
  }

}
