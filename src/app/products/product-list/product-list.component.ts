import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
 
})

export class ProductListComponent implements OnInit {
    imgWidth: number = 50;
    products: Iproduct[];
    showHideImg : boolean = false;
    filterList : string ;
    errorMessage: string;

    toggleImg() : void{
    //   alert("xy");
      this.showHideImg = !this.showHideImg;
    }

    constructor(private productService : ProductServiceService) { }
    
    ngOnInit() {
        this.productService.getProducts().subscribe(
            data => this.products = data,
            error => this.errorMessage = <any>error
            );
        console.log("list"+this.products);
    }
//not event, string?
    ratingParentFn(msg:string):void{
        alert(msg);
    }

}