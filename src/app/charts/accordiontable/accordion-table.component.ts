import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-table',
  templateUrl: './accordion-table.component.html',
  styleUrls: ['./accordion-table.component.css']
})
export class AccordionTableComponent {
  sortOption = 'best';

  columns: string[] = ['rank', 'retailer', 'pos', 'percentage'];
  data = [
    { rank: 1, retailer: 'SINERSIS', pos: 'SINERSIS, TRADACETE, S.L., LA PUEBLA DE ALMORADIEL', percentage: 900 },
    { rank: 2, retailer: 'ALCAMPO', pos: 'ALCAMPO, Alcobendas', percentage: 750 },
    { rank: 3, retailer: 'MEDIAMARKT', pos: 'MEDIAMARKT, Huelva', percentage: 600 },
    { rank: 4, retailer: 'CARREFOUR', pos: 'CARREFOUR, Lalin', percentage: 400 },
    { rank: 5, retailer: 'MEDIAMARKT', pos: 'MEDIAMARKT, La Maquinista', percentage: 388 }
  ];
}
