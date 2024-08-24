import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private _httpClient = inject(HttpClient);

  constructor() { }

  getBrands() :Observable<any>{
    return this._httpClient.get(Environment.BASE_URL + 'brands')
  }
}
