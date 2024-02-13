import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  if(authService.studentLoggedIn || localStorage.getItem("userToken")) { //deberia verificar el token no solo que exista
    return true
  } else {
    return router.createUrlTree(["login"]);
  }
};
