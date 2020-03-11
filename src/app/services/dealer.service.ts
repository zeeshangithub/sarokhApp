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

  addDealer(formData:any){
    return this.http.post<any>(`${environment.apiURL}dealer/add`, formData);
  }

  fetchDealers(){
    return this.http.get<any>(`${environment.apiURL}dealer/get-list`);
  }
}
