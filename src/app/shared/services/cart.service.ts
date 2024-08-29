import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { count } from 'console';
import { ICartService } from '../interface/icart-service';
import { LoggingService } from './logging.service';
import { TokenService } from './token.service';
import { Product } from '../interface/product';
import { CartData } from '../interface/cart-data';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService implements ICartService {
  cartItemNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private platFormId = inject(PLATFORM_ID);

 // interceptor gate fe + be
 // headers 
 // error global
 // loading screen
  constructor(
    private _http: HttpClient,
    private _loggingService: LoggingService,
    private _tokenService: TokenService
  ) {
    if (isPlatformBrowser(this.platFormId ) && localStorage.getItem('userToken') ) {
      this.getCartProduct().subscribe({
        next: (res: CartData) => {
          this.cartItemNumber.next(res.numOfCartItems);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      token: '' + this._tokenService.getToken(),
    });
  }

  addProductToCart(id: string): Observable<any> {
 
    return this._http.post(
      `${Environment.BASE_URL}cart`,
      { productId: id }
    );
  }

  deleteProductInCart(id: string): Observable<any> {
  
    return this._http.delete(`${Environment.BASE_URL}cart/${id}`);
  }

  getCartProduct(): Observable<any> {
    return this._http.get(`${Environment.BASE_URL}cart`);
  }

  updateProductInCart(id: string, count: number): Observable<any> {
  
    return this._http.put(
      `${Environment.BASE_URL}cart/${id}`,
      { count: count }
    );
  }

  clearUserCart(): Observable<any> {
    
    return this._http.delete(`${Environment.BASE_URL}cart`);
  }
}
