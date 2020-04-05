import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  fetchDashboard(userType: string, userId: string) {
    return this.http.post<any>(`${environment.apiURL}web-dashboard/${userType}/${userId}`, {});
  }

  fetchOrdersList() {
    return this.http.get<any>(`${environment.apiURL}order/get-list`);
  }

  fetchOrderByType(orderType: string) {
    return this.http.post<any>(`${environment.apiURL}order/get-order-type/${orderType}`, {});
  }

  fetchAllLedgers() {
    return this.http.get<any>(`${environment.apiURL}finance/all-ledgers`);
  }

  fetchCodCollection() {
    return this.http.get<any>(`${environment.apiURL}finance/get-cod-collection`);
  }

  fetchShipperBilling() {
    return this.http.get<any>(`${environment.apiURL}finance/get-shipper-billing`);
  }

  fetchDriverPayout() {
    return this.http.get<any>(`${environment.apiURL}finance/get-driver-payout`);
  }

  fetchDealerPayout() {
    return this.http.get<any>(`${environment.apiURL}finance/get-dealer-payout`);
  }

  fetchFinanceDashboard() {
    return this.http.get<any>(`${environment.apiURL}finance/get-finance-dashboard`);
  }
}
