import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path : 'list', component : UserListComponent},
  {path : 'form', component : UserFormComponent},
  {path : 'detail', component : UserDetailComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class UserRoutingModule { }
