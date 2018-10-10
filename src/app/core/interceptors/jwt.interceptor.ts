import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http/';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let res: any = event.body;
          if (res.code === 401) {
            this.tokenService.delete();
            this.router.navigate(['auth/login']).then().catch();
          }
        }
      }
    ));
  }
}
