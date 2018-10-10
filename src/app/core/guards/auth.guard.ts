import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../http/auth.service';
import { TokenService } from '../services/token.service';

@Injectable({providedIn : 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private tokenService: TokenService) {
  }

  canActivate() {
    if (!this.tokenService.get()) {
      this.router.navigate(['/auth/login']).then().catch();
      return false;
    }

    this.authService.profile()
      .subscribe(
        (resp: any) => {
          if (!resp.status) {
            this.router.navigate(['/auth/login']).then().catch();
            return false;
          }
        },

        (err: any) => {
          console.log('Can Activate Error', err);
          this.router.navigate(['/auth/login']).then().catch();
          return false;
        });

    return true;
  }
}
