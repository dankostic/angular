import { Component, input } from '@angular/core';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  imports: [],
  selector: 'app-testimonials',
  styleUrl: './testimonials.css',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  readonly testimonials = input<Testimonial[]>([
    {
      quote:
        "I have every league I follow in one dashboard now. The live updates are genuinely faster than the broadcast.",
      name: 'Mia Torres',
      role: 'Season ticket holder',
    },
    {
      quote:
        'Switched from three different apps to just Sportaling. The stats view alone is worth it for fantasy prep.',
      name: 'Daniel Ortiz',
      role: 'Fantasy league commissioner',
    },
    {
      quote:
        "Clean, fast, and it doesn't bury scores under ads. Exactly what I wanted on matchday.",
      name: 'Priya Nair',
      role: 'Sports blogger',
    },
  ]);

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
