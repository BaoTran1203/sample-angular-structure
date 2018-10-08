import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  imports : [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations : [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryDetailComponent
  ]
})

export class CategoryModule {
}
