import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/desserte-de-jardin-chariot-pour-plancha-barbecue-en-bois-et-metal-avec-2-etageres-et-3-crochets-107-x-65-x-80-cm-noir-naturel-P-6132097-89602367_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 2,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/meuble-de-cuisine-avec-plan-de-travail-roulettes-115x36x90cm-naizy-T-31778452-122344920_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 3,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/meuble-de-cuisine-bas-armoire-de-cuisine-akord-s80-oliwia-modulable-blanc-80-cm-3-tiroirs-facade-blanche-80x46x85-cm-T-22948858-60055241_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      
      {
        id: 4,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/chariot-de-rangement-de-cuisine-panier-circulaire-rotatif-a-5-etages-grande-etagere-de-rangement-avec-roues-a-360-degres-T-35484022-131372831_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 5,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/armoire-murale-suspendue-inox-portes-coulissantes-cuisine-900-x-400-x-500-mm-T-7206334-53952101_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 6,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/mondeer-desserte-de-cuisine-chariot-de-serviceavec-plateau-amovible-avec-pieds-reglables-et-roulettes-etagere-de-cuisine-structure-en-fer-noir-T-21460765-53940111_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 7,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/chariot-de-service-desserte-de-a-4-niveaux-avec-poignee-roulettes-avec-freins-avec-bords-rehausses-fin-montage-facile-pour-cuisine-salle-de-bain-salon-hoobro-ebf15tc01-T-33778356-117048769_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },{
        id: 8,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/desserte-4-niveaux-1-tiroir-1-plateau-amovible-4-roulettes-avec-freins-37x37x76-cm-T-29228484-81923434_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },{
        id: 9,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/desserte-3-niveaux-a-roulettes-natureo-acacia-noir-5five-noir-T-34767973-130236201_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
      {
        id: 10,
        title: 'Desserte de jardin chariot pour plancha barbecue...',
        imageUrl: 'https://cdn.manomano.com/desserte-de-cuisine-cosi-bois-blanc-et-plateaux-facon-hetre-l76-cm-T-52751-66346673_1.jpg',
        brandLogoUrl: 'https://cdn.manomano.com/marque-outsunny-6502.jpg',
        rating: 4.17,
        ratingCount: 6,
        price: 103,
        priceDecimals: '90',
        deliveryInfo: 'Livraison 48h gratuite'
      },
    ];
  }
}
