import { Component } from '@angular/core';
// the products property contains imported data for each product form the products array in products.ts.
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  // Here we pass data from the child component - ProductAlertsComponent to the parent component - ProductListComponent
  onNotify(product_name: string) {
    window.alert(
      'You will be notified when the product ' + product_name + ' goes on sale'
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
