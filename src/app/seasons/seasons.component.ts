import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent {
  season: string;
  section: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.season = this.route.firstChild.snapshot.params['season'];
      }
    });
  }

  onSeasonChange() {
    this.section = this.route.firstChild.snapshot.url[1].path;
    this.router.navigate(['/', this.season, this.section]);
  }
}
