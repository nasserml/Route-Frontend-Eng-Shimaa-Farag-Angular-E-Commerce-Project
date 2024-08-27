import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { ResponseGetWishtlist } from '../interface/response-get-wishtlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  isDeletedClick:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);

  wishlistNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  wishlistProductsIdArr: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

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

  setWishlistProductsIdsArr():void{
    this.getProductsInWishlist().subscribe({
      next: (response: ResponseGetWishtlist) => {
        this.wishlistNumber.next(response.count);
        let idsArr :string[] = response.data.map((product)=>product._id) ;
        this.wishlistProductsIdArr.next(idsArr)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
