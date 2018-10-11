import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Injectable({providedIn : 'root'})
export class CategoryService {

  private url_endPoint = `${environment.url}/category`;

  constructor(public http: HttpClient) {
  }

  list(params: {}): any {
    const query = $.param(params);
    const url = `${this.url_endPoint}?${query}`;
    return this.http.get(url);
  }

  add(model): any {
    const url = `${this.url_endPoint}`;
    return this.http.post(url, model);
  }

  detail(id): any {
    const url = `${this.url_endPoint}/${id}`;
    return this.http.get(url);
  }

  update(model): any {
    const url = `${this.url_endPoint}`;
    return this.http.put(url, model);
  }

  delete(model): any {
    const url = `${this.url_endPoint}/${model._id}`;
    return this.http.delete(url);
  }
}
