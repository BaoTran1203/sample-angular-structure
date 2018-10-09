import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { HomeTemplateComponent } from './core/template/home-template/home-template.component';
import { MainTemplateComponent } from './core/template/main-template/main-template.component';

const routes: Routes = [
  {path : '', redirectTo : '/auth/login', pathMatch : 'full', canActivate : [AuthGuard]},
  {
    path : 'auth',
    component : HomeTemplateComponent,
    loadChildren : () => AuthModule
  },
  {
    path : 'user',
    component : MainTemplateComponent,
    loadChildren : () => UserModule
  },
  {
    path : 'category',
    component : MainTemplateComponent,
    loadChildren : () => CategoryModule
  },
  {
    path : 'product',
    component : MainTemplateComponent,
    loadChildren : () => ProductModule
  }
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers : [AuthGuard],
  declarations : []
})
export class AppRoutingModule {
}
