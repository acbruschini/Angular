import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../../shared/components/components.module';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    EffectsModule.forFeature([StudentEffects]),
    StoreModule.forFeature(studentFeature), //Aca iria siempre el reducer, esto "activa" el store
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
