import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TemplateModule } from './template/template.module';
import { ModulesModule } from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
    NgbModule,
    CoreModule,
    RouterModule,
    TemplateModule,
    AppRoutingModule,
    ModulesModule

  ],
  providers : [],
  bootstrap : [AppComponent]
})
export class AppModule {

}
