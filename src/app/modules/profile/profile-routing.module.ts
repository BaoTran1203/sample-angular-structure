import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes = [
  {path : '', redirectTo : 'form', pathMatch : 'full'},
  {path : 'form', component : ProfileFormComponent},
  {path : 'password', component : PasswordFormComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class ProfileRoutingModule {
}
