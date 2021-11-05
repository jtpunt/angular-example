// To set up ProductAlertsComponent to receive product data, first import Input from @angular/core.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Import the Product class from ../products
import { Product } from '../products';

// The @Component() definition also exports the class, ProductAlertsComponent, which handles
// functionality for the component.
@Component({
  // The selector, app-product-alerts, identifies the component. By convention, Angular component
  // selectors begin with the prefix app-, followed by the component name.
  selector: 'app-product-alerts',
  // The template and style filenames reference the component's HTML and CSS.
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// ProductAlertsComponent is a child component that can receive data from its parent component, ProductListComponent
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent,
  // ProductListComponent
  @Input() product: Product | undefined;
  // Configuring ProductAlertsComponent with an @Output() allwos the ProductAlertsComponent to emit an event when
  // the value of the notify property changes.
  @Output() notify = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
