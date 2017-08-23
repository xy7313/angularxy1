import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductServiceService } from "../product-service.service";
import { Iproduct } from "../iproduct";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string;
  product: Iproduct;
    // {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "March 19, 2016",
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // };
  imgWidth: number = 50;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.getProduct(id);
    // this.productService.getProducts()
    //   .map((products: Iproduct[]) => products.find(product => product.productId == this.proId))
    //   .subscribe(
    //     data => this.product = data,
    //     error => this.errorMessage = <any>error
    //   );
    // console.log(this.product);
  }

  getProduct(id: string) {
    console.log('id: ',id);
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    }, error => (this.errorMessage = <any>error));
  }

  goBack(): void {
    this.route.navigate(["/products"]);
  }

  // ratingParentFn(msg: string): void {
  //   alert(msg);
  // }
}
