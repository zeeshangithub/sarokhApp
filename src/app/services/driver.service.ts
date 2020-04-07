import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  addDriver(formData:any){
    return this.http.post<any>(`${environment.apiURL}driver/add`, formData);
  }
  GetDriverList(){
    let shipperId =  localStorage.getItem('_id')
    console.log(shipperId)
    return this.http.get<any>(`${environment.apiURL}driver/get-list`);
  }
  DeleteDriver(id: string){
    return this.http.delete<any>(`${environment.apiURL}/driver/delete/${id}`);
  }
  GetSingleDriver(id){

    return this.http.get<any>(`${environment.apiURL}driver/get-details/${id}`);
  }
  updateSingleDriver(formData){

    return this.http.put<any>(`${environment.apiURL}driver/update`, formData);
  }
}
