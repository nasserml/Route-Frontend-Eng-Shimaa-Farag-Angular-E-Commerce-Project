import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  register(formData:any):Observable<any> {
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', formData);

  }
}
