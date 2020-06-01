import { TestBed } from '@angular/core/testing';

import { WeatherOverviewService } from './weather-overview.service';

describe('WeatherOverviewService', () => {
  let service: WeatherOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
