import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchInputComponent } from './search-input/search-input.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { WeatherOverviewService } from './weather-overview.service';

import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchInputComponent,
    LoadingScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    SearchInputComponent,
    LoadingScreenComponent,
    WeatherOverviewService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
