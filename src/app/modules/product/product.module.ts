import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductSearchFormComponent } from './product-search-form/product-search-form.component';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbPaginationModule
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
