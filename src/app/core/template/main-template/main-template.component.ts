import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector : 'app-main-template',
  templateUrl : './main-template.component.html',
  styleUrls : ['./main-template.component.scss']
})

export class MainTemplateComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('body').addClass('login-page');
  }
}
