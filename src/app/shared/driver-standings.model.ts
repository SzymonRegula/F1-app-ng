import { Constructor } from './constructor.model';
import { Driver } from './driver.model';

export class DriverStandings {
  Driver: Driver;
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructors: Constructor[];
}
