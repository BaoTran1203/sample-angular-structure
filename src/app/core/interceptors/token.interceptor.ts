import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public token: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestOption: any = {};

    if (this.token.get()) {
      requestOption.setHeaders = {
        Authorization : `MyPrivateKey ${this.token.get()}`
      };
    }

    request = request.clone(requestOption);
    return next.handle(request);
  }
}
