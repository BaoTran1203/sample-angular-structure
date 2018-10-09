import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector : 'app-home-template',
  templateUrl : './home-template.component.html',
  styleUrls : ['./home-template.component.scss']
})

export class HomeTemplateComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('body').addClass('login-page');
  }
}
