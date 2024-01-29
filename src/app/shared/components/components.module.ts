import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTableComponent } from './array-table/array-table.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ArrayTableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    ArrayTableComponent
  ]
})
export class ComponentsModule { }
