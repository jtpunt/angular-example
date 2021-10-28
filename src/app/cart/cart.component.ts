import { Component, OnInit } from '@angular/core';
// This service provides convenient methods for generating cntrols
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  // To gather the user's name and address, use the FormBuilder group() method to set the
  // checkoutForm property to a form model containing name and address fields
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  // Define an onSubmit() method to process the form. This method allows users to submit their name
  // and address. In addition, this method uses the clearCart() method of the CartService to reset
  // the form and clear the cart
  onSubmit(): void {
    // process checkout data here
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
