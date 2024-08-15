import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userData = new BehaviorSubject<any>(null);

  decodeTokenAndSetUserData(): void {
    const token = localStorage.getItem('userToken');
    if(token) {
      const decoded = jwtDecode<JwtPayload>(token);
      this._userData.next(decoded);
      
    }
  }

  clearUserData():void{
    this._userData.next(null);
  }

  getUserData(): Observable<any> {
    
    return this._userData.asObservable();
  }

  constructor() { }
}
