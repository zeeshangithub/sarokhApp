import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }


  getTripDetails(id){

    return this.http.get<any>(`${environment.apiURL}trip/get-trips-shipments/${id}`);
  }
  createTrip(formdata){
    return this.http.post<any>(`${environment.apiURL}trip/create-trip`, formdata);
  }
}
