import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { MatchCard, Match } from './components/match-card/match-card';
import { Standings } from './components/standings/standings';
import { Testimonials } from './components/testimonials/testimonials';
import { Faq } from './components/faq/faq';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Stats,
    MatchCard,
    Standings,
    Testimonials,
    Faq,
    Cta,
    Footer,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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
