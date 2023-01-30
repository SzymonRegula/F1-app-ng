import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Round } from '../shared/round.model';
import { ScheduleResponse } from './schedule-response.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  schedule: Round[];
  season: string;
  isLoading = false;
  error = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.season = this.route.snapshot.params['season'];
    this.route.params.subscribe((params) => {
      this.season = params['season'];
      this.getSchedule(this.season);
    });
  }

  getSchedule(season: string) {
    this.isLoading = true;
    this.http.get(`https://ergast.com/api/f1/${season}.json`).subscribe(
      (responseData: ScheduleResponse) => {
        this.schedule = responseData.MRData.RaceTable.Races;

        const observables = this.schedule.map((round) => {
          const country = round.Circuit.Location.country;
          return this.http.get(
            `https://restcountries.com/v3/name/${country}?fields=flags`
          );
        });

        forkJoin(observables).subscribe(
          (responses) => {
            responses.forEach((res, i) => {
              this.schedule[i].flagUrl = res[0].flags[0];
            });
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.error = error;
          }
        );
      },
      (error) => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }
}
