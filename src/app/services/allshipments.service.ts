import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllshipmentsService {

  constructor(private http: HttpClient) { }

  fetchAllShipments(id){
    return this.http.get<any>(`${environment.apiURL}order/get-all-shipments/${id}`);
  }
  fetchAllPendingOders(id){
    return this.http.get<any>(`${environment.apiURL}order/get-pending-orders/${id}`);
  }
  fetchAllReturnedShipments(id){
    return this.http.get<any>(`${environment.apiURL}order/get-returned-shipments/${id}`);
  }
}
