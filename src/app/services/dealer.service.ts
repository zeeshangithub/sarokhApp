import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  addDealer(formData: any) {
    return this.http.post<any>(`${environment.apiURL}dealer/add`, formData);
  }

  fetchDealersInventory() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}dealer/get-dealer-inventory/${user}`);
  }
  fetchDealersCharges() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}dealer/get-delear-service-charges/${user}`);
  }
  fetchCodReturn() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}dealer/get-dealer-cod-returns/${user}`);
  }

}
