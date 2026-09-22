import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Faq } from '../../components/faq/faq';
import { Cta } from '../../components/cta/cta';

@Component({
  imports: [Hero, Testimonials, Faq, Cta],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
