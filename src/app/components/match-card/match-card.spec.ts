import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchCard } from './match-card';

describe('MatchCard', () => {
  let component: MatchCard;
  let fixture: ComponentFixture<MatchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('match', {
      league: 'Premier League',
      status: 'live',
      minute: '45',
      homeTeam: 'Arsenal',
      homeScore: 1,
      awayTeam: 'Liverpool',
      awayScore: 0,
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
