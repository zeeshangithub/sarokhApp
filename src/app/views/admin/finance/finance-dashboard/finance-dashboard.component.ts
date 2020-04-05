import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent implements OnInit {

  private getDashboard;

  constructor(private Dashboard: AdminService) { }

  ngOnInit(): void {
    this.getFinanceDashboard();
  }

  getFinanceDashboard() {
    this.Dashboard.fetchFinanceDashboard().subscribe(res => {
      this.getDashboard = res.data
    })
  }

}
