import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ToastService } from './core/services/toast.service';
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
    BrowserAnimationsModule,

    // Main Module
    CoreModule,
    AppRoutingModule,
    ModulesModule,
    TemplateModule,

    // Libs Module
    NgbModule,
    ToasterModule,
    Ng4LoadingSpinnerModule.forRoot()
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
    },
    ToasterService,
    ToastService,
    Ng4LoadingSpinnerService
  ],
  bootstrap : [AppComponent]
})

export class AppModule {
}
