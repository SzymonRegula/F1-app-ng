import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { DriversComponent } from './drivers/drivers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StandingsComponent } from './standings/standings.component';
import { RoundComponent } from './schedule/round/round.component';
import { DriverComponent } from './drivers/driver/driver.component';
import { DriverStandingsComponent } from './standings/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './standings/constructor-standings/constructor-standings.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeasonsComponent,
    DriversComponent,
    ScheduleComponent,
    StandingsComponent,
    RoundComponent,
    DriverComponent,
    DriverStandingsComponent,
    ConstructorStandingsComponent,
    SpinnerComponent,
    ErrorAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
