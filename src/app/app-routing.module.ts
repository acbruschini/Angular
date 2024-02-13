import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./layout/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadChildren: () => import("./layout/dash/dash.module").then(m => m.DashModule)
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
