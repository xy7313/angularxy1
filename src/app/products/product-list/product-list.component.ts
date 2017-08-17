import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})

export class ProductListComponent implements OnInit {
    imgWidth: number = 50;
    products: Iproduct[];
    showHideImg : boolean = false;
    filterList : string ;

    toggleImg() : void{
    //   alert("xy");
      this.showHideImg = !this.showHideImg;
    }

    constructor(private productService : ProductServiceService) { }
    
    ngOnInit() {
        this.productService.getProducts().subscribe(data => this.products = data);
    }
    
    ratingParentFn(msg:string):void{
        alert('string');
    }

}