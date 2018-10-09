import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports : [
    CommonModule,
    RouterModule
  ],
  exports : [
    RouterModule,
  ],
  declarations : [
    HomeTemplateComponent,
    MainTemplateComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})

export class TemplateModule {
}
