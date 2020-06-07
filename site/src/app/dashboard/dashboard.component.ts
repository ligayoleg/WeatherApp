import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherOverviewService } from '../weather-overview.service';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  zip: string;

  weatherData: any;

  location: string;
  country: string;
  description: string;
  temp: string;

  loading: boolean = false;

  // public data: Array<any> = MyData;

  constructor(
    private WeatherOverviewService: WeatherOverviewService,
    private LoadingScreenComponent: LoadingScreenComponent,
    private SearchInputComponent: SearchInputComponent
  ) {
    // this.WeatherOverviewService.myMethod$.subscribe((data) => {
    //     console.log("Data in dashboard component");
    //     console.log(data); // And he have data here too!
    //   }
    // ); 
  }

  ngOnInit(): void {}

  showWeather() {
   
    this.WeatherOverviewService.getWeatherData(this.zip).subscribe((data) => {
      console.log(data);
      this.weatherData = data;
    });
  }

  displayWeather() {
    this.zip = this.WeatherOverviewService.zip;
 
    if (this.zip == undefined) { 
      alert('Insert Proper Zip!');
    } else {
      this.showWeather();
      
      this.location = this.weatherData.name + ', ' + this.weatherData.sys.country;
      this.description = this.weatherData.weather[0].description.toUpperCase();
      this.temp =
        (((this.weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed() + ' F';
    }
  }


}
