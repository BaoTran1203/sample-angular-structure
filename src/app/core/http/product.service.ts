import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Injectable({providedIn : 'root'})
export class ProductService {

  private url_endPoint = `${environment.url}/product`;

  constructor(public http: HttpClient) {
  }

  list(params: any): Observable<Object> {
    const query = $.param(params);
    const url = `${this.url_endPoint}?${query}`;
    return this.http.get(url);
  }

  add(model: any): Observable<Object> {
    const url = `${this.url_endPoint}`;
    return this.http.post(url, model);
  }

  detail(id: string): Observable<Object> {
    const url = `${this.url_endPoint}/${id}`;
    return this.http.get(url);
  }

  update(model: any): Observable<Object> {
    const url = `${this.url_endPoint}`;
    return this.http.put(url, model);
  }

  delete(model: any): Observable<Object> {
    const url = `${this.url_endPoint}/${model._id}`;
    return this.http.delete(url);
  }
}
