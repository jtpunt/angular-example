import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Define an items property to store the array of the current products in the cart
  items: Product[] = [];
  // This method appends a producct to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }
  // This method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }
  // This method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
