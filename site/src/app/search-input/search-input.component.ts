import { Component, OnInit } from '@angular/core';
import { WeatherOverviewService } from '../weather-overview.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  private zipVal: any;
  public zip: any;
  // public data: Array<any> = ;

  constructor(
    private WeatherOverviewService: WeatherOverviewService
  ) {
    this.WeatherOverviewService.myMethod(this.zip);
  }

  ngOnInit(): void {}



  sendData() {
    this.WeatherOverviewService.zip = this.zip;
    console.log(this.WeatherOverviewService.zip);
    console.log(this.zip);
    console.log('Data Sent');
  }

  update(value: string) {
    this.zip = value;
    this.WeatherOverviewService.myMethod(this.zip);
    console.log(this.WeatherOverviewService.zip);
  }
}
