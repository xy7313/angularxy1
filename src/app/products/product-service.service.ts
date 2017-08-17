import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServiceService {

  constructor(private http:Http) { }

  getProducts() : Observable<Iproduct[]> {
    return this.http.get('data/data.json').map(resp => <Iproduct[]>resp.json());
  }

}
