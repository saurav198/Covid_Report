import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule, HttpRequest } from '@angular/common/http';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestdataService {

  constructor(
    private http: HttpClient,
  ) { }
  getHttpOptionHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let options = { headers: headers };
    return options;
  }
  getCovidData() {
    return this.http.get("https://api.covid19api.com/summary");
  }
}
