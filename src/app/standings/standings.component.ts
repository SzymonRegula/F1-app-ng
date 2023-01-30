import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConstructorStandings } from '../shared/constructor-standings.model';
import { DriverStandings } from '../shared/driver-standings.model';
import { ConstructorStandingsResponse } from './constructor-standings-response.model';
import { DriverStandingResponse } from './driver-standings-response.model';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent {
  season: string;
  driverStandings: DriverStandings[];
  constructorStandings: ConstructorStandings[];
  isLoading: number; // loading when != 0
  error = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.season = this.route.snapshot.params['season'];
    this.route.params.subscribe((params) => {
      this.season = params['season'];
      this.isLoading = 2;
      this.getDriverStandings(this.season);
      this.getConstructorStandings(this.season);
    });
  }

  getDriverStandings(season: string) {
    this.http
      .get(`https://ergast.com/api/f1/${season}/driverStandings.json`)
      .subscribe(
        (responseData: DriverStandingResponse) => {
          this.driverStandings =
            responseData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          this.isLoading--;
        },
        (error) => {
          this.isLoading = 0;
          this.error = error;
        }
      );
  }

  getConstructorStandings(season: string) {
    this.http
      .get(`https://ergast.com/api/f1/${season}/constructorStandings.json`)
      .subscribe(
        (responseData: ConstructorStandingsResponse) => {
          this.constructorStandings =
            responseData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          this.isLoading--;
        },
        (error) => {
          this.isLoading = 0;
          this.error = error;
        }
      );
  }
}
