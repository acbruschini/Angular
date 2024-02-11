import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashComponent } from "./dash.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { StudentsComponent } from "./pages/students/students.component";
import { InscriptionsComponent } from "./pages/inscriptions/inscriptions.component";


const routes: Routes = [
    {
        path: "", //Va vacio porque el dashboard/ me lo da el app-routing
        component: DashComponent,
        children: [
            {
                path: "courses",
                component: CoursesComponent,
            },
            {
                path: "students",
                component: StudentsComponent,
            },
            {
                path: "inscriptions",
                component: InscriptionsComponent,
            },
            {
                path: "**",
                redirectTo: "students"
            }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashRoutingModule { }