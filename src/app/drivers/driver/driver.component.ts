import { Component, Input } from '@angular/core';
import { DriverStandings } from 'src/app/shared/driver-standings.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent {
  @Input() driver: DriverStandings;
}
