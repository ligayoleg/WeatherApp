import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherOverviewService } from '../weather-overview.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  zip: 11224;

  weatherData: any;

  location : string;
  country : string;
  description : string;
  temp : string ;

  loading : boolean = false;

  constructor(
    private WeatherOverviewService : WeatherOverviewService
  ) { }

  ngOnInit(): void {
    
  }

  showWeather() {
    this.WeatherOverviewService.getWeatherData()
      .subscribe((data) => {
        console.log(data);
        this.weatherData = data;
      })
      
  }

  displayWeather(){
    
    this.showWeather();
    this.location = this.weatherData.name + ', ' + this.weatherData.sys.country;
    this.description = this.weatherData.weather[0].description.toUpperCase();
    this.temp = (((this.weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed() + " F";

  }
  
}
