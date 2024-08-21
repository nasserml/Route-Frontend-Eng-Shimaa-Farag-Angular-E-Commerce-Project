import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const autGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router);
  let _auth = inject(AuthService);
 
  let platformId = inject(PLATFORM_ID);


  if(isPlatformBrowser(platformId)) {
    if(_auth.userData.getValue() != null) {
      return true;
    } else {
      _router.navigate(['/login'])
      return false;
    }

  } else {
    return false;
  }

  
};
