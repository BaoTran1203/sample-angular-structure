import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecretCodeService } from '../services/secret-code.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService,
              private secretCodeService: SecretCodeService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestOption: any = {};

    let secretCode = this.secretCodeService.has ? this.secretCodeService.get : '';
    let token = this.tokenService.has ? this.tokenService.get : '';

    requestOption.setHeaders = {
      Authorization : `Bearer ${secretCode} ${token}`
    };

    request = request.clone(requestOption);
    return next.handle(request);
  }
}
