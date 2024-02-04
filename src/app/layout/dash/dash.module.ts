import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';

import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    StudentsModule,
    SharedModule,
    CoursesModule,
    RouterModule
  ],
  exports:[DashComponent]
})
export class DashModule { }
