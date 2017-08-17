import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: "products", component: ProductListComponent },
        { path: "products/:id/:productName", component: ProductDetailComponent },
        { path: "", redirectTo: "products", pathMatch: "full" },
        { path: "**", redirectTo: "products" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
