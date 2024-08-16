import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private _http: HttpClient) { 
  }

  getProducts():Observable<any>{
    return this._http.get(`${Environment.BASE_URL}products`)
  }

  getSpecificProduct(productId:string):Observable<any>{
    return this._http.get(`${Environment.BASE_URL}products/${productId}`)
  }
}
