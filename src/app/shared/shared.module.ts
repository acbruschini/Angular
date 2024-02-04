import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';

import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PipesModule,
    DirectivesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,

  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PipesModule,
    DirectivesModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
  ]
})
export class SharedModule { }
