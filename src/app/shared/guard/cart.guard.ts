import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

export const cartGuard: CanActivateFn = (route, state) => {

  let cartService:CartService =inject(CartService);
  let _router = inject(Router);
  let _toastr = inject(ToastrService);
  let _platform_id= inject(PLATFORM_ID);

  if(isPlatformBrowser(_platform_id)) {


    if(cartService.cartItemNumber.getValue() == 0) {
  
      _toastr.info('Please Add Product To Cart', 'Cart Empty', {
        positionClass: 'toast-bottom-right',});
      
      _router.navigate(['/home']);
      
      return false;
  
    } 
  }




  return true;
};
