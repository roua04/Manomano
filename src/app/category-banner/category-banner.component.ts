import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss'],
})
export class CategoryBannerComponent {
  categories = [
    { name: 'Desserte de cuisine' },
    { name: 'Élément bas de cuisine' },
    { name: 'Élément haut de cuisine' },
    { name: 'Aménagement intérieur de meuble' },
    { name: 'Façade de cuisine ' },
    { name: 'colonne de cuisine ' },
    { name: 'casserolier de cuisine ' },
    { name: 'caison de cuisine ' },
    { name: 'meuble four ' },
    { name: 'plateau pivoton ' },
  ];

  constructor(private router: Router) { }

  navigateToCategory(category: any) {
    this.router.navigate(['/category', category.name]);
  }
}

