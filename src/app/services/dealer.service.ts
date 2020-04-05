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

  fetchDealers() {
    return this.http.get<any>(`${environment.apiURL}dealer/get-list`);
  }

  fetchDealersDetail() {
    var user = localStorage.getItem('id')
    return this.http.get<any>(`${environment.apiURL}dealer/get-details/${user}`);
  }

  addDealer(formData: any) {
    return this.http.post<any>(`${environment.apiURL}dealer/add`, formData);
  }
  // getDealerList(formData: any) {
  //   return this.http.post<any>(`${environment.apiURL}dealer/add`, formData);
  // }

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

  deleteDealer ( id : any){
    return this.http.delete<any>(`${environment.apiURL}dealer/delete/${id}`)
  }

  getSingleDealer ( id : any){
    return this.http.get<any>(`${environment.apiURL}/dealer/get-details/${id}`)
  }

  
  updateSingleDealer ( formData : any){
    return this.http.put<any>(`${environment.apiURL}dealer/update`, formData);
  }


}
