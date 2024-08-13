import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { Register } from '../interface/register';
import { Login } from '../interface/login';
import { jwtDecode, JwtPayload } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { 

    afterNextRender(()=>{
      if(localStorage.getItem('userToken') != null) {
        this.userInformation();
      }
    })
  }

  register(formData:Register):Observable<any> {
    return this._http.post(`${Environment.BASE_URL}auth/signup`, formData);
  }

  login(formData:Login):Observable<any>{
    return this._http.post(`${Environment.BASE_URL}auth/signin`, formData)
  }


  userData:BehaviorSubject<any> = new BehaviorSubject(null);
  userInformation() {
    
    let decoded = jwtDecode(JSON.stringify(localStorage.getItem('userToken')));
    this.userData.next(decoded);
    


  }
}


// BehaviorSubject => rxjs
// subscribe
// next
// getValue