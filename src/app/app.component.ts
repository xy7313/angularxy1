import { Component } from '@angular/core';
import { ProductServiceService } from './products/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductServiceService]
})
export class AppComponent {
  // title = 'app';
  pageTitle: string = "Gardening Products Management";
}
