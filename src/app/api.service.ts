import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'YOUR_API_KEY';
  constructor(private httpClient: HttpClient) { }
  public worldBank(){
    return this.httpClient.get(`http://api.worldbank.org/V2/incomeLevel/LIC/country=${this.API_KEY}`);
  }
}
