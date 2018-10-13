import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthModule } from '../../modules/auth/auth.module';
import { UserModule } from '../../modules/user/user.module';

@Injectable({providedIn : 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(model: any): Observable<Object> {
    let url = `${environment.url}/register`;
    return this.http.post(url, model);
  }

  login(model: any): Observable<Object> {
    let url = `${environment.url}/login`;
    return this.http.post(url, model);
  }

  password(model: any): Observable<Object> {
    let url = `${environment.url}/password`;
    return this.http.put(url, model);
  }

  getProfile(): Observable<Object> {
    let url = `${environment.url}/profile`;
    return this.http.get(url);
  }

  profile(model: any): Observable<Object> {
    let url = `${environment.url}/profile`;
    return this.http.put(url, model);
  }

  logout(): Observable<Object> {
    let url = `${environment.url}/logout`;
    return this.http.get(url);
  }

  forgot(model: any): Observable<Object> {
    let url = `${environment.url}/forgot`;
    return this.http.post(url, model);
  }

  reset(model: any): Observable<Object> {
    let url = `${environment.url}/reset`;
    return this.http.put(url, model);
  }
}
