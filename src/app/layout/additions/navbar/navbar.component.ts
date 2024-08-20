import { afterNextRender, Component, inject, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin:boolean = false;
  cartNumber:number = 0;
  platFormId = inject(PLATFORM_ID);

  constructor(
    private _auth: AuthService,
    private _router:Router,
    private _cart: CartService,
      
  ){

    

    // if(isPlatformBrowser(_platformId)) {
    //   let _cart = inject(CartService);
    // }

    // if(typeof localStorage !== 'undefined'){
    //   let _cart = inject(CartService);
    // }



    // afterNextRender(()=>{
    //   let _Cart = inject(CartService)
    // })

    
  }

  ngOnInit(): void {


      
    this._cart.cartItemNumber.subscribe({
      next:(res) => {
        this.cartNumber = res;
      },
      error:(error) => {
        console.log(error);
      }
    })
   
    
    this._auth.getUserData().subscribe((userData)=>{
      if(userData == null ) {
        this.isLogin = false;
      } else{
          this.isLogin = true
        }
      });

    
 

     
  }

  logout():void{

    this._auth.logOut();
    this._router.navigate(['/login']);
 


    // localStorage.removeItem('userToken');
    // this._router.navigate(['/login']);
    // this._auth.userData.next(null);
  }

}
