import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin:boolean = false;

  constructor(
    private _auth: AuthService,
    private _router:Router,
    
  ){
    
  }

  ngOnInit(): void {
 
    
      this._auth.getUserData().subscribe((userData)=>{
        if(userData == null ) {
          this.isLogin = false;
        } else{
          this.isLogin = true
        }
      })
      
  }

  logout():void{

    this._auth.logOut();
    this._router.navigate(['/login']);
 


    // localStorage.removeItem('userToken');
    // this._router.navigate(['/login']);
    // this._auth.userData.next(null);
  }

}
