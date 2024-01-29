import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { MatTableModule} from '@angular/material/table';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../../../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../../../shared/directives/directives.module';
import { ComponentsModule } from '../../../../shared/components/components.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    PipesModule,
    DirectivesModule,
    ComponentsModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
