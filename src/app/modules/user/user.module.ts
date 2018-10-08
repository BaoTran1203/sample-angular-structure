import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports : [
    CommonModule,
    UserRoutingModule
  ],
  declarations : [
    UserFormComponent,
    UserListComponent,
    UserDetailComponent
  ]
})

export class UserModule {
}
