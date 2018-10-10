import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(model): Observable<Object> {
    let url = `${environment.url}/register`;
    return this.http.post(url, model);
  }

  login(model): Observable<Object> {
    let url = `${environment.url}/login`;
    return this.http.post(url, model);
  }

  password(model): Observable<Object> {
    let url = `${environment.url}/password`;
    return this.http.post(url, model);
  }

  profile(): Observable<Object> {
    let url = `${environment.url}/profile`;
    return this.http.get(url);
  }

  logout(): Observable<Object> {
    let url = `${environment.url}/logout`;
    return this.http.get(url);
  }
}
