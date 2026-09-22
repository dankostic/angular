import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly columns = [
    { title: 'Product', links: ['Live scores', 'Fixtures', 'Standings', 'Stats'] },
    { title: 'Company', links: ['About', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Help center', 'API docs', 'Status'] },
  ];
}
