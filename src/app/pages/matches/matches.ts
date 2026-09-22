import { Component } from '@angular/core';
import { MatchCard, Match } from '../../components/match-card/match-card';

@Component({
  imports: [MatchCard],
  selector: 'app-matches',
  styleUrl: './matches.css',
  templateUrl: './matches.html',
})
export class Matches {
  protected readonly matches: Match[] = [
    {
      league: 'Premier League',
      status: 'live',
      minute: '67',
      homeTeam: 'Arsenal',
      homeScore: 2,
      awayTeam: 'Liverpool',
      awayScore: 2,
    },
    {
      league: 'La Liga',
      status: 'live',
      minute: '78',
      homeTeam: 'Real Madrid',
      homeScore: 2,
      awayTeam: 'Barcelona',
      awayScore: 1,
    },
    {
      league: 'Serie A',
      status: 'finished',
      homeTeam: 'Inter Milan',
      homeScore: 3,
      awayTeam: 'AC Milan',
      awayScore: 0,
    },
    {
      league: 'Bundesliga',
      status: 'upcoming',
      kickoff: 'Today, 20:30',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Dortmund',
    },
    {
      league: 'Ligue 1',
      status: 'upcoming',
      kickoff: 'Tomorrow, 18:00',
      homeTeam: 'PSG',
      awayTeam: 'Marseille',
    },
    {
      league: 'Champions League',
      status: 'finished',
      homeTeam: 'Man City',
      homeScore: 1,
      awayTeam: 'Bayern Munich',
      awayScore: 1,
    },
  ];
}
