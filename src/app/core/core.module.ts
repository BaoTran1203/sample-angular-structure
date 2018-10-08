import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports : [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  declarations : [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  entryComponents : []
})

export class CoreModule {
}
