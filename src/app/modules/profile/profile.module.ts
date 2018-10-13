import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations : [
    ProfileFormComponent,
    PasswordFormComponent
  ]
})

export class ProfileModule {
}
