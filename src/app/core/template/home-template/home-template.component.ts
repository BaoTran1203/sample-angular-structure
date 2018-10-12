import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SecretCodeService } from '../../services/secret-code.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector : 'app-home-template',
  templateUrl : './home-template.component.html',
  styleUrls : ['./home-template.component.scss']
})

export class HomeTemplateComponent implements OnInit, AfterViewInit {

  constructor(private token: TokenService,
              private secretCode: SecretCodeService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.token.has && this.secretCode.has) {
      this.router.navigate(['/product/list']).then().catch();
      return;
    }
  }

  ngAfterViewInit() {
    $('body').addClass('login-page');
  }
}
