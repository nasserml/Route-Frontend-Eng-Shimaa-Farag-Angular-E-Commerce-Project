import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const logoutGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let _auth = inject(AuthService);
 
  let platformId = inject(PLATFORM_ID);



  if(isPlatformBrowser(platformId)) {
    
    if(localStorage.getItem('userToken') != null){
      _router.navigate(['/home']);
      return false;

    } else {
      return true
    }


  } else {
    return true;
  }
};
