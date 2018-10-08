import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { MainTemplateComponent } from './main-template/main-template.component';

@NgModule({
  imports : [
    CommonModule,
    RouterModule
  ],
  exports : [
    RouterModule
  ],
  declarations : [
    HomeTemplateComponent,
    MainTemplateComponent
  ]
})

export class TemplateModule {
}
