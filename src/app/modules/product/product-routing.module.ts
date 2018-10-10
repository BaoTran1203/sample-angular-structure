import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path : 'list', component : ProductListComponent},
  {path : 'form', component : ProductFormComponent},
  {path : 'detail', component : ProductDetailComponent}
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class ProductRoutingModule {
}
