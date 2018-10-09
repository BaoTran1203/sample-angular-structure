import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public profile: any = {};
  public isShowMobileMenu = false;

  constructor() { }

  ngOnInit() {
  }

  signOut() {
  }
}
