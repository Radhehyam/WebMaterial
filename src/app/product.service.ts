import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<any[]> {
    return of([
      { id: 1, name: 'Cement', description: 'High-quality cement', price: 10, imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Bricks', description: 'Red Bricks', price: 5, imageUrl: 'https://via.placeholder.com/150' },
      // Add more products
    ]);
  }
}
