import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../http/auth.service';
import { ProfileService } from '../../services/profile.service';
import { SecretCodeService } from '../../services/secret-code.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public profileInfo: any = {};
  public isShowMobileMenu = false;

  constructor(private authService: AuthService,
              private token: TokenService,
              private secretCode: SecretCodeService,
              private profile: ProfileService,
              private router: Router) {
  }

  ngOnInit() {
    this.profileInfo = this.profile.get;
  }

  signOut() {
    this.authService.logout();
    this.token.delete;
    this.secretCode.delete;
    this.profile.delete;
    setTimeout(() => {
      this.router.navigate(['/auth/login']).then().catch();
    }, 400);
  }
}
