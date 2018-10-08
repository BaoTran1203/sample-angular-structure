import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// import {AccountService} from '../shared/api/account.service';

@Injectable({providedIn : 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router
              // private accountService: AccountService
  ) {
  }

  canActivate() {
    if (!window.localStorage.getItem('TOKEN_KEY')) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    // this.accountService.profile()
    //   .subscribe(
    //     (resp: any) => {
    //       if (!resp.status) {
    //         this.router.navigate(['/auth/login']);
    //         return false;
    //       }
    //     },
    //     (err) => {
    //       console.log('Can Activate Error', err);
    //       this.router.navigate(['/auth/login']);
    //       return false;
    //     });

    return true;
  }
}
