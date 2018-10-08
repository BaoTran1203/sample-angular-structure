import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { HomeTemplateComponent } from './template/home-template/home-template.component';

const routes: Routes = [
  {path : '', redirectTo : '/auth/login', pathMatch : 'full', canActivate : [AuthGuard]},
  {
    path : 'auth',
    component : HomeTemplateComponent,
    loadChildren : () => AuthModule
  }
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes, {useHash : true})
  ],
  exports : [RouterModule],
  providers : [AuthGuard],
  declarations : []
})
export class AppRoutingModule {
}
