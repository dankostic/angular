import { Component, input } from '@angular/core';

export interface StandingRow {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

@Component({
  imports: [],
  selector: 'app-standings',
  styleUrl: './standings.css',
  templateUrl: './standings.html',
})
export class Standings {
  readonly title = input('Premier League');

  readonly rows = input<StandingRow[]>([
    { position: 1, team: 'Arsenal', played: 12, won: 9, drawn: 2, lost: 1, points: 29, form: ['W', 'W', 'D', 'W', 'W'] },
    { position: 2, team: 'Liverpool', played: 12, won: 8, drawn: 3, lost: 1, points: 27, form: ['W', 'D', 'W', 'W', 'L'] },
    { position: 3, team: 'Man City', played: 12, won: 8, drawn: 2, lost: 2, points: 26, form: ['L', 'W', 'W', 'D', 'W'] },
    { position: 4, team: 'Aston Villa', played: 12, won: 7, drawn: 3, lost: 2, points: 24, form: ['W', 'W', 'L', 'W', 'D'] },
    { position: 5, team: 'Tottenham', played: 12, won: 6, drawn: 3, lost: 3, points: 21, form: ['D', 'L', 'W', 'W', 'W'] },
  ]);

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  }
}
