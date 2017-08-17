import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

  goBack() : void{
    this.route.navigate(['/products']);
  }

}
