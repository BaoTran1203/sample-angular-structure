import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Injectable({providedIn : 'root'})
export class ProductService {

  constructor(public http: HttpClient) {
  }

  list(params: any): Observable<Object> {
    const query = $.param(params);
    const url = `${environment.url}/products?${query}`;
    return this.http.get(url);
  }

  add(model: any): Observable<Object> {
    const url = `${environment.url}/product`;
    return this.http.post(url, model);
  }

  detail(id: string): Observable<Object> {
    const url = `${environment.url}/product/${id}`;
    return this.http.get(url);
  }

  update(model: any): Observable<Object> {
    const url = `${environment.url}/product`;
    return this.http.put(url, model);
  }

  delete(model: any): Observable<Object> {
    const url = `${environment.url}/product/${model._id}`;
    return this.http.delete(url);
  }

  wishlist(id: string, status: number): Observable<Object> {
    const url = `${environment.url}/product/${id}/wishlist/${status}`;
    return this.http.get(url);
  }
}
