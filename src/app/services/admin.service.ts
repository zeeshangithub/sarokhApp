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

  fetchDashboard(userType: string, userId: string){
    return this.http.post<any>(`${environment.apiURL}web-dashboard/${userType}/${userId}`, {});
  }

  fetchOrdersList(){
    return this.http.get<any>(`${environment.apiURL}order/get-list`);
  }

  fetchOrderByType(orderType: string){
    return this.http.post<any>(`${environment.apiURL}order/get-order-type/${orderType}`, {});
  }
}
