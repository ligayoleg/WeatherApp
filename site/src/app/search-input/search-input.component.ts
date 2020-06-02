import { Component, OnInit } from '@angular/core';
import {  WeatherOverviewService } from '../weather-overview.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  
  public zipVal: string;
  
  constructor(
    private WeatherOverviewService : WeatherOverviewService,
  ) {}

  ngOnInit(): void {}

  onKey(event: any) {
    this.WeatherOverviewService.zip  = event.target.value;
    console.log(this.zipVal);
  }
}
