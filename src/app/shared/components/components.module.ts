import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTableComponent } from './array-table/array-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ArrayTablePipe } from './array-table/array-table.pipe';



@NgModule({
  declarations: [
    ArrayTableComponent,
    ArrayTablePipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    ArrayTableComponent,
    ArrayTablePipe,
  ]
})
export class ComponentsModule { }
