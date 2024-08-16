import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss'],
})
export class CategoryBannerComponent implements AfterViewInit {
  categories = [
    { title: 'Desserte de cuisine', imgSrc: 'https://cdn.manomano.com/images/images_products/2144922/T/16676073_1.jpg', link: '/desserte-de-cuisine-2970' },
    { title: 'Elément bas de cuisine', imgSrc: 'https://cdn.manomano.com/images/images_products/596833/T/36913680_1.jpg', link: '/element-bas-de-cuisine-3035' },
    { title: 'Elément haut de cuisine', imgSrc: 'https://cdn.manomano.com/images/images_products/1090998/T/42167512_1.jpg', link: '/element-haut-de-cuisine-3034' },
    { title: 'Aménagement intérieur de meuble', imgSrc: 'https://cdn.manomano.com/images/images_products/15971387/T/39637196_1.jpg', link: '/amenagement-interieur-de-meuble-637' },
    //{ title: 'Façade de cuisine', imgSrc: 'https://cdn.manomano.com/images/images_products/17239914/T/30043080_1.jpg', link: '/facade-de-cuisine-3362' },
    //{ title: 'Colonne de cuisine', imgSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40\'%3E%3Cdefs%3E%3ClinearGradient id=\'g1\'%3E%3Cstop stop-color=\'%23F5F6F7\'/%3E%3Cstop offset=\'.983\' stop-color=\'%23ECEDF0\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ECEDF0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g1)\'/%3E%3C/svg%3E', link: '/colonne-de-cuisine-3223' },
    //{ title: 'Casserolier de cuisine', imgSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40\'%3E%3Cdefs%3E%3ClinearGradient id=\'g1\'%3E%3Cstop stop-color=\'%23F5F6F7\'/%3E%3Cstop offset=\'.983\' stop-color=\'%23ECEDF0\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ECEDF0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g1)\'/%3E%3C/svg%3E', link: '/casserolier-de-cuisine-3040' },
    //{ title: 'Caisson de cuisine', imgSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40\'%3E%3Cdefs%3E%3ClinearGradient id=\'g1\'%3E%3Cstop stop-color=\'%23F5F6F7\'/%3E%3Cstop offset=\'.983\' stop-color=\'%23ECEDF0\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ECEDF0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g1)\'/%3E%3C/svg%3E', link: '/caisson-de-cuisine-2730' },
    //{ title: 'Meuble four', imgSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40\'%3E%3Cdefs%3E%3ClinearGradient id=\'g1\'%3E%3Cstop stop-color=\'%23F5F6F7\'/%3E%3Cstop offset=\'.983\' stop-color=\'%23ECEDF0\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ECEDF0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g1)\'/%3E%3C/svg%3E', link: '/meuble-four-3587' },
    //{ title: 'Plateau pivotant', imgSrc: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40px\' height=\'40\'%3E%3Cdefs%3E%3ClinearGradient id=\'g1\'%3E%3Cstop stop-color=\'%23F5F6F7\'/%3E%3Cstop offset=\'.983\' stop-color=\'%23ECEDF0\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ECEDF0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23g1)\'/%3E%3C/svg%3E', link: '/plateau-pivotant-2582' }
  ];

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    // Commenter ou supprimer les initialisations de carousel
    // $('.category-carousel').slick({
    //   autoplay: false,
    //   arrows: true,
    //   infinite: false,
    //   speed: 0,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   draggable: false,
    //   swipe: false,
    //   touchMove: false,
    //   fade: false,
    //   cssEase: 'linear'
    // });
  }

  navigateToCategory(category: any) {
    this.router.navigate([category.link]);
  }
 
  chunkedCategories() {
    const chunkSize = 4;
    const categoriesCopy = [...this.categories];
    const chunks = [];

    while (categoriesCopy.length) {
      chunks.push(categoriesCopy.splice(0, chunkSize));
    }

    return chunks;
  }
}
