import { Component, input } from '@angular/core';

export interface Stat {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
}

@Component({
  imports: [],
  selector: 'app-stats',
  styleUrl: './stats.css',
  templateUrl: './stats.html',
})
export class Stats {
  readonly stats = input<Stat[]>([
    { label: 'Live matches', value: '128', change: '+12%', trend: 'up' },
    { label: 'Teams tracked', value: '2,450', change: '+4%', trend: 'up' },
    { label: 'Leagues covered', value: '96' },
    { label: 'Avg. update delay', value: '0.8s', change: '-18%', trend: 'down' },
  ]);
}
