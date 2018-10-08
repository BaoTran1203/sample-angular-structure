import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports : [
    CommonModule,
    ProductRoutingModule
  ],
  declarations : [
    ProductDetailComponent,
    ProductListComponent,
    ProductFormComponent
  ]
})

export class ProductModule {
}
