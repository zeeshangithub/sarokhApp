import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityCountryService {

  constructor(private http: HttpClient) { }

  fetchCityByCountry(country: string) {
    return this.http.get<any>(`${environment.apiURL}city/get-country-city/${country}`);
  }
  fetchCountryList() {
    return this.http.get<any>(`${environment.apiURL}country/get-countries-list`);
  }
}
