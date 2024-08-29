import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { isPlatformBrowser } from '@angular/common';

export const headerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  let _platformId = inject(PLATFORM_ID);
  let tokenHeaderReq:any;

  if(isPlatformBrowser(_platformId)) {
    if(req.url.includes('cart') || req.url.includes('wishlist')) {
      req = req.clone({ setHeaders:{token: tokenService.getToken()!}})
    
    }

  }


  return next(req);
};
