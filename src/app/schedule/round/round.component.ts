import { Component, Input } from '@angular/core';
import { Round } from '../../shared/round.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css'],
})
export class RoundComponent {
  @Input() round: Round;

  getDays(round: Round) {
    const firstDay = round.FirstPractice.date.slice(-2);
    const lastDay = round.date.slice(-2);
    return `${firstDay}-${lastDay}`;
  }

  getMonth(round: Round) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const startMonth = +round.FirstPractice.date.slice(5, 7);
    const endMonth = +round.date.slice(5, 7);
    return `${months[startMonth - 1].toUpperCase()}${
      startMonth !== endMonth ? `-${months[endMonth - 1].toUpperCase()}` : ''
    }`;
  }
}
