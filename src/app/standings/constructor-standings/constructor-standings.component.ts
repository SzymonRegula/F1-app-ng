import { Component, Input } from '@angular/core';
import { ConstructorStandings } from 'src/app/shared/constructor-standings.model';

@Component({
  selector: 'app-constructor-standings',
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.css'],
})
export class ConstructorStandingsComponent {
  @Input() constructorStandings: ConstructorStandings[];
}
