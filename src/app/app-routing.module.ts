import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './layout/dash/dash.component';
import { StudentsComponent } from './layout/dash/pages/students/students.component';
import { CoursesComponent } from './layout/dash/pages/courses/courses.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashComponent,
    children: [
      {
        path: "courses",
        component: CoursesComponent,
      },
      {
        path: "students",
        component: StudentsComponent,
      }]
  },
  {
    path: "**",
    redirectTo: "dashboard/students"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
