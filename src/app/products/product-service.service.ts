import { Injectable } from "@angular/core";
import { Iproduct } from "./iproduct";
import { Http, Response } from "@angular/http";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductServiceService {
  constructor(private http: Http) {}

  getProducts(): Observable<Iproduct[]> {
    return this.http
      .get("data/data.json")
      .map(resp => <Iproduct[]>resp.json())
      .do(data => console.log("all:" + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getProduct(id: string): Observable<Iproduct> {
    return this.getProducts().map((products: Iproduct[]) => {
        const temp = products.filter(function(product) {
        const flag = product.productCode === id;
        return flag;
      })[0];
      return temp;
    });
    // .do(data =>
    //   console.log("ONLY ID:" + id + " json:" + JSON.stringify(data))
    // )
    // .catch(this.handleError);
    // return product;
  }

  private handleError(err: Response) {
    console.log("err handling");
    return Observable.throw(err.json().error || "Internal server error");
  }
}
