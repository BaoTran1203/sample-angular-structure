import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../http/auth.service';
import { SecretCodeService } from '../services/secret-code.service';
import { TokenService } from '../services/token.service';

@Injectable({providedIn : 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private token: TokenService,
              private secretCode: SecretCodeService) {
  }

  canActivate() {
    if (!this.token.has || !this.secretCode.has) {
      this.backToLoginPage();
      return false;
    }

    this.authService.profile()
      .subscribe(
        (resp: any) => {
          if (!resp.status) {
            this.backToLoginPage();
            return false;
          }
        },

        (err: any) => {
          console.log('AuthGuard', err);
          this.backToLoginPage();
          return false;
        });

    return true;
  }

  private backToLoginPage() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']).then().catch();
    }, 400);
  }
}
