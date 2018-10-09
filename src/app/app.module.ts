import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
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

    // Main Module
    CoreModule,
    AppRoutingModule,
    ModulesModule

    // Libs Module


  ],
  providers : [],
  bootstrap : [AppComponent]
})
export class AppModule {

}
