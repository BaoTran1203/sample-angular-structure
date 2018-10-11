import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretCodeService } from '../../services/secret-code.service';
import { TokenService } from '../../services/token.service';
import * as $ from 'jquery';

@Component({
  selector : 'app-main-template',
  templateUrl : './main-template.component.html',
  styleUrls : ['./main-template.component.scss']
})

export class MainTemplateComponent implements OnInit, AfterViewInit {

  constructor(private token: TokenService,
              private secretCode: SecretCodeService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.token.has || !this.secretCode.has) {
      this.router.navigate(['/auth/login']).then().catch();
      return;
    }
  }

  ngAfterViewInit() {
    $('body').addClass('login-page');
  }
}
