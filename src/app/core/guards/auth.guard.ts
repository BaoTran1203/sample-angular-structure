import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../http/auth.service';
import { ProfileService } from '../services/profile.service';
import { SecretCodeService } from '../services/secret-code.service';
import { TokenService } from '../services/token.service';

@Injectable({providedIn : 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private token: TokenService,
              private secretCode: SecretCodeService,
              private profile: ProfileService) {
  }

  canActivate() {
    if (!this.token.has || !this.secretCode.has) {
      this.backToLoginPage();
      return false;
    }

    this.authService.getProfile()
      .subscribe(
        (resp: any) => {
          if (!resp.status) {
            this.backToLoginPage();
            return false;
          }
          this.profile.save = resp.data;
        },

        (err: any) => {
          console.log('AuthGuard', err);
          this.backToLoginPage();
          return false;
        }
      );

    return true;
  }

  private backToLoginPage() {
    this.token.delete;
    this.secretCode.delete;
    this.profile.delete;
    setTimeout(() => {
      this.router.navigate(['/auth/login']).then().catch();
    }, 400);
  }
}
