import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DriverStandings } from '../shared/driver-standings.model';
import { DriversResponse } from './drivers-response.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent {
  drivers: DriverStandings[];
  season: string;
  isLoading = false;
  error = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.season = this.route.snapshot.params['season'];
    this.route.params.subscribe((params) => {
      this.season = params['season'];
      this.getDrivers(this.season);
    });
  }

  getDrivers(season: string) {
    this.isLoading = true;
    this.http
      .get(`https://ergast.com/api/f1/${season}/driverStandings.json`)
      .subscribe(
        (responseData: DriversResponse) => {
          this.drivers =
            responseData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.error = error;
        }
      );
  }
}
