import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';

import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { InscriptionsModule } from './pages/inscriptions/inscriptions.module';

import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    StudentsModule,
    InscriptionsModule,
    SharedModule,
    CoursesModule,
    RouterModule,
    DashRoutingModule
  ],
  exports:[DashComponent]
})
export class DashModule { }
