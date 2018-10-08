import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  imports : [
    CommonModule,
    AuthModule,
    UserModule,
    ProductModule,
    CategoryModule
  ],
  declarations : []
})

export class ModulesModule {
}
