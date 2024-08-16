import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  brands = [
    { name: 'VIDAXL', count: 18509, id: 'vidaxl' },
    { name: 'VILO', count: 1256, id: 'vilo' },
    { name: 'TLILY', count: 1185, id: 'tlily' },
    { name: 'VEDAXEL', count: 341, id: 'vedaxel' },
    { name: 'TORNA', count: 309, id: 'torna' },
    { name: 'GD MINUISERIE', count: 180, id: 'gd_minuiserie' },
    { name: 'AUTREHELLOSHOP26', count: 180, id: 'autrehelloshop26' }
  ];

  vendeur = [
    { name: 'OK-LIVING', count: 1256, id: 'ok-living' },
    { name: 'NcDongya', count: 1186, id: 'ncdongya' },
    { name: 'avimac', count: 363, id: 'avimac' },
    { name: 'the living store avimac', count: 284, id: 'the-living-store-avimac' },
    { name: 'gdminuiserie', count: 215, id: 'gdminuiserie' },
    { name: 'helloshop26', count: 180, id: 'helloshop26' },
    { name: 'pais prix', count: 170, id: 'pais-prix' }
  ];
}



