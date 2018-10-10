import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { TemplateModule } from './core/template/template.module';
import { ModulesModule } from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';

if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    // Core Module
    BrowserModule,
    RouterModule,
    HttpClientModule,

    // Main Module
    CoreModule,
    AppRoutingModule,
    ModulesModule,
    TemplateModule

    // Libs Module

  ],
  providers : [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : JwtInterceptor,
      multi : true
    }
  ],
  bootstrap : [AppComponent]
})
export class AppModule {

}
