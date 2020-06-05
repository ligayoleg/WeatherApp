import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherOverviewService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  appid: string;
  zip: string;

  constructor(private http: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  getWeatherData(zipCode) {
    this.appid = '8bd333d4762ef5d6f7d19be0325fc401';
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${this.appid}`
    );
  }

  myMethod(data) {
    // console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.zip = data;

}
}
