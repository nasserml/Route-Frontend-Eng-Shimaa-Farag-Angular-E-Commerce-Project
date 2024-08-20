import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { Register } from '../interface/register';
import { Login } from '../interface/login';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserService } from './user.service';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userData = new BehaviorSubject<any>(null)

  isLocalStorage: boolean = false


  constructor(
    private _http:HttpClient,
    private _userService: UserService,
    private _loggingService:LoggingService,
    ) { 
      
      afterNextRender(()=>{
        this._loggingService.logInfo("auth service init after next render");
        this.isLocalStorage = true;
        // this.initializeUser();
        if(localStorage.getItem('userToken') != null) {
          this._loggingService.logInfo("auth service init after next render local storage");
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

  logOut():void {
    localStorage.removeItem('userToken');
    this.userData.next(null);
  }

  getUserData(): Observable<any>{
    return this.userData.asObservable();
  }

  private initializeUser(): void {

    if(localStorage.getItem('userToken') != null) {
      this._userService.decodeTokenAndSetUserData();
      
    }

  }



}


// BehaviorSubject => rxjs
// subscribe
// next
// getValue