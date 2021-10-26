import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Import the Product class and products array from ../products
import { Product, products } from '../products';
// Import the cart service
import { CartService } from '../cart.service';
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
  // This method does the following:
  // - Takes the current product as an argument
  // - Uses the CartService addToCart() method to add the product to the cart
  // - Displays a message that you've added a product to the cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  // Inject ActivatedRoute into the constructor() by adding 'private route: ActivatedRoute'
  // as an argument within the constructor's parentheses.
  // ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute
  // contains information about the route and the route's parameters. By injecting ActivatedRoute.
  // you are configuring the component to use a service.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
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
