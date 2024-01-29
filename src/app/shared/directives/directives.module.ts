import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameTitleDirective } from './name-title.directive';



@NgModule({
  declarations: [
    NameTitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameTitleDirective
  ]
})
export class DirectivesModule { }
