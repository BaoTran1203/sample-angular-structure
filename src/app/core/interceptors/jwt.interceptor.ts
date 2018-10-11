import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http/';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SecretCodeService } from '../services/secret-code.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token: TokenService,
              private secretCode: SecretCodeService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          let res: any = event.body;
          if (res.code === 401) {
            this.backToLoginPage();
          }
        }
      },

      (err: HttpErrorResponse) => {
        console.log('JwtInterceptor', err);
        this.backToLoginPage();
      }
    ));
  }

  private backToLoginPage() {
    this.token.delete;
    this.secretCode.delete;
    setTimeout(() => {
      this.router.navigate(['auth/login']).then().catch();
    }, 400);
  }
}
