import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly highlights = ['Live scores', 'Team stats', 'Fixture reminders'];
}
