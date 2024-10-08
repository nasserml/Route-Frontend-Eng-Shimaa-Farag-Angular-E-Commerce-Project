import { afterNextRender, Component, inject, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';
import { FlowbiteService } from '../../../shared/services/flowbite.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { TranslateModule } from '@ngx-translate/core';
import { MyTranslateService } from '../../../shared/services/my-translate.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin:boolean = false;
  cartNumber:number = 0;
  wishlistNumber:number = 0;

  private wishlistService = inject(WishlistService);
  private _lang = inject(MyTranslateService);

  platFormId = inject(PLATFORM_ID);

  constructor(
    private _auth: AuthService,
    private _router:Router,
    private _cart: CartService,
    private flowbiteService:FlowbiteService
      
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

    this.wishlistService.wishlistNumber.subscribe({
      next: (response) => {
        this.wishlistNumber = response;
      }
    })

    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded' + flowbite);
    })


      
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


  changeLang(lang:string) {
    this._lang.changeLang(lang);
  }

}
