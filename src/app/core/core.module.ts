import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateModule } from './template/template.module';

@NgModule({
  imports : [
    CommonModule,
    RouterModule,
    TemplateModule
  ],
  exports : [],
  declarations : [],
  entryComponents : []
})

export class CoreModule {
}
