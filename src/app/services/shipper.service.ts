import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  addShipper(formData: any) {
    return this.http.post<any>(`${environment.apiURL}shipper/add`, formData);
  }
  fetchshipperDetails(id) {
    return this.http.get<any>(`${environment.apiURL}shipper/get-details/${id}`)
  }
  fetchshipperDashboard(id) {
    return this.http.get<any>(`${environment.apiURL}web-dashboard/shipper/${id}`)
  }
  searchShipperShipment(formData: any) {
    return this.http.post<any>(`${environment.apiURL}order/search-shipper-shipments/`, formData);
  }
  createShipperLedgerShipment(formData: any) {
    return this.http.post<any>(`${environment.apiURL}ledger/add/`, formData);
  }
  getLedgerList() {
    return this.http.get<any>(`${environment.apiURL}ledger/get-list`);
  }
  deleteLedger(id) {
    return this.http.delete<any>(`${environment.apiURL}ledger/delete/${id}`)
  }
  fetchAddLedgerFor(ledgerForName: string) {
    return this.http.get<any>(`${environment.apiURL}/ledger/get-ledger-for-details/${ledgerForName}`);
  }
  getLedgerDetails(id) {
    return this.http.get<any>(`${environment.apiURL}ledger/get-details/${id}`)
  }
  updateLedger(formData: any) {
    return this.http.put<any>(`${environment.apiURL}ledger/update`, formData)
  }
  fetchCodShipment() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}order/get-COD-shipments/${user}`);
  }
  fetchShipmentIssues() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}order/get-issue-shipments/${user}`);
  }
}
