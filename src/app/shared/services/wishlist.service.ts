import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private _httpClient = inject(HttpClient);

  constructor() { }

  addProductToWishList(productId: string):Observable<any> {

    return this._httpClient.post(Environment.BASE_URL + 'wishlist',{productId}, {headers:{token: localStorage.getItem('userToken')!}} );
  }

  deleteProductFromWishList(productId:string) : Observable<any> {
    return this._httpClient.delete(Environment.BASE_URL + 'wishlist/' + productId, {
      headers: {
        token:localStorage.getItem('userToken')!
      }
    })
  }



  getProductsInWishlist():Observable<any> {
    return this._httpClient.get(Environment.BASE_URL + 'wishlist',{headers: {
      token: localStorage.getItem('userToken')!
    }})
  }

}
