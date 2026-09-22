import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  imports: [],
  selector: 'app-faq',
  styleUrl: './faq.css',
  templateUrl: './faq.html',
})
export class Faq {
  protected readonly items: FaqItem[] = [
    {
      question: 'How fast are the live scores?',
      answer:
        'Scores and match events update in under a second from the official feed, so you rarely see them before we do.',
    },
    {
      question: 'Which leagues does Sportaling cover?',
      answer:
        'All major European leagues, continental cups, and over 90 domestic competitions worldwide, with more added regularly.',
    },
    {
      question: 'Is there a free plan?',
      answer:
        'Yes. Live scores, standings, and fixtures are free forever. Advanced stats and alerts are part of the paid tier.',
    },
    {
      question: 'Can I get notified about my favorite team?',
      answer:
        'Follow any team or league to get kickoff reminders, goal alerts, and full-time summaries pushed to your device.',
    },
  ];

  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
