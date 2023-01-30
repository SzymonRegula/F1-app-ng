import { Component, Input } from '@angular/core';
import { DriverStandings } from 'src/app/shared/driver-standings.model';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.css'],
})
export class DriverStandingsComponent {
  @Input() driverStandings: DriverStandings[];
}
