import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Import the Product class and products array from ../products
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
// The ProductDetailsComponent handles the display of each product.
// The Angular Router displays components based on the browser's URL
// and your defined routes.
export class ProductDetailsComponent implements OnInit {
  // Define the product property
  product: Product | undefined;
  // Inject ActivatedRoute into the constructor() by adding 'private route: ActivatedRoute'
  // as an argument within the constructor's parentheses.
  // ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute
  // contains information about the route and the route's parameters. By injecting ActivatedRoute.
  // you are configuring the component to use a service.
  constructor(private route: ActivatedRoute) {}
  // In the ngOnInit() method, extract the productId from the route parameters and find the corresponding product in the products array
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
