import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductSearchFormComponent } from './product-search-form/product-search-form.component';

@NgModule({
  imports : [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  declarations : [
    ProductDetailComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductSearchFormComponent
  ]
})

export class ProductModule {
}
