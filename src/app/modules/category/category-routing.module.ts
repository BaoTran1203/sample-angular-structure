import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path : 'list', component : CategoryListComponent},
  {path : 'form', component : CategoryFormComponent},
  {path : 'detail', component : CategoryDetailComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class CategoryRoutingModule {
}
