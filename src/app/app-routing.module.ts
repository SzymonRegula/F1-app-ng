import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  { path: ':season/schedule', component: ScheduleComponent },
  { path: ':season/standings', component: StandingsComponent },
  { path: ':season/drivers', component: DriversComponent },
  { path: '**', redirectTo: '2022/schedule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
