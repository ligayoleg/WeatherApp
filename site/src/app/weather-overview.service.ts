import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SearchInputComponent } from './search-input/search-input.component'; 
@Injectable({
  providedIn: 'root'
})
export class WeatherOverviewService {

  constructor(
    private http : HttpClient,
    private SearchInputComponent : SearchInputComponent,
  ) { }

  readonly appid = '8bd333d4762ef5d6f7d19be0325fc401';
  zip = this.SearchInputComponent.zipVal;
  url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.appid}`;

  getWeatherData() {
    return this.http.get(this.url);
  }
}
