import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { Register } from '../interface/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  register(formData:Register):Observable<any> {
    return this._http.post(`${Environment.BASE_URL}auth/signup`, formData);

    

  }
}
