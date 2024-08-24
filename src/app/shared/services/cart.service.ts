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

  // header:any = {
  //   token: localStorage.getItem('userToken')
  // }

  constructor(
    private _http: HttpClient,
    private _loggingService: LoggingService,
    private _tokenService: TokenService
  ) {
    if (isPlatformBrowser(this.platFormId)) {
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
    console.log(this.headers);
    console.log({
      token: localStorage.getItem('userToken')!,
    });
    // this._loggingService.logInfo(`Add product to cart with id ${id}`);
    return this._http.post(
      `${Environment.BASE_URL}cart`,
      { productId: id },
      { headers: this.headers }
    );
  }

  deleteProductInCart(id: string): Observable<any> {
    // this._loggingService.logInfo(`Delete product from cart with id ${id}`);
    return this._http.delete(`${Environment.BASE_URL}cart/${id}`, {
      headers: this.headers
    });
  }

  getCartProduct(): Observable<any> {
    // this._loggingService.logInfo(`Get cart products`);
    return this._http.get(`${Environment.BASE_URL}cart`, {
      headers: this.headers
    });
  }

  updateProductInCart(id: string, count: number): Observable<any> {
    // this._loggingService.logInfo(
    //   `Update product in cart with id ${id} and count ${count}`
    // );
    return this._http.put(
      `${Environment.BASE_URL}cart/${id}`,
      { count: count },
      {
        headers: this.headers
      }
    );
  }

  clearUserCart(): Observable<any> {
    // this._loggingService.logInfo(`Clear user cart`);
    return this._http.delete(`${Environment.BASE_URL}cart`, {
      headers: this.headers
    });
  }
}
