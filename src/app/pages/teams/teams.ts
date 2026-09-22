import { Component } from '@angular/core';
import { Standings } from '../../components/standings/standings';

@Component({
  imports: [Standings],
  selector: 'app-teams',
  styleUrl: './teams.css',
  templateUrl: './teams.html',
})
export class Teams {}
