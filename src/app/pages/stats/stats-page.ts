import { Component } from '@angular/core';
import { Stats } from '../../components/stats/stats';

@Component({
  imports: [Stats],
  selector: 'app-stats-page',
  styleUrl: './stats-page.css',
  templateUrl: './stats-page.html',
})
export class StatsPage {}
