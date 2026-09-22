import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Matches } from './pages/matches/matches';
import { Teams } from './pages/teams/teams';
import { StatsPage } from './pages/stats/stats-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'matches', component: Matches },
  { path: 'teams', component: Teams },
  { path: 'stats', component: StatsPage },
  { path: '**', redirectTo: '' },
];
