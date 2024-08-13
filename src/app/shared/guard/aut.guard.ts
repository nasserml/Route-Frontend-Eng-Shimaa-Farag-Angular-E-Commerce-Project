import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const autGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router);
  let _auth = inject(AuthService);

  if(_auth.userData.getValue() != null) {
    return true;
  } else {
    _router.navigate(['/login'])
    return false;
  }

  
};
