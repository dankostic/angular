import { Component, input } from '@angular/core';

export interface Match {
  league: string;
  status: 'live' | 'upcoming' | 'finished';
  minute?: string;
  homeTeam: string;
  homeScore?: number;
  awayTeam: string;
  awayScore?: number;
  kickoff?: string;
}

@Component({
  imports: [],
  selector: 'app-match-card',
  styleUrl: './match-card.css',
  templateUrl: './match-card.html',
})
export class MatchCard {
  readonly match = input.required<Match>();

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  }
}
