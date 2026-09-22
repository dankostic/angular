import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cta',
  styleUrl: './cta.css',
  templateUrl: './cta.html',
})
export class Cta {
  protected email = '';
  protected readonly submitted = signal(false);

  protected subscribe(): void {
    if (!this.email.trim()) {
      return;
    }
    this.submitted.set(true);
  }
}
