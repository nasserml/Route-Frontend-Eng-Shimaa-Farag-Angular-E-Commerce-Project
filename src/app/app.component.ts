import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/additions/navbar/navbar.component';
import { FooterComponent } from './layout/additions/footer/footer.component';
import {FilterMatchMode, PrimeNGConfig} from 'primeng/api';
import { CartService } from './shared/services/cart.service';
import { error } from 'console';
import { isPlatformBrowser } from '@angular/common';
import { LoadingComponent } from "./layout/pages/loading/loading.component";
import { WishlistService } from './shared/services/wishlist.service';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  title = 'Route-Frontend-Eng-Shimaa-Farag-Angular-E-Commerce-Project';

   loading:boolean = true;
  private _cart = inject(CartService);
  private wishlistService = inject(WishlistService);
  private platformId= inject(PLATFORM_ID);

  constructor(private primengConfig:PrimeNGConfig){
    
    
  }
  ngOnInit(): void {

  if(isPlatformBrowser(this.platformId)) {
    
    if(localStorage.getItem('userToken')){

      this.getCartItems();
      this.wishlistService.setWishlistProductsIdsArr();
    }


    this.loading = false
  } 

  this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    }
    this.primengConfig.filterMatchModeOptions = {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };


   
  }

  getCartItems():void {
    
    this._cart.getCartProduct().subscribe({
      next:(res) =>{
        this._cart.cartItemNumber.next(res.numOfCartItems);
        this.loading = false;
        
  
      },
      error:(error) => {
        this.loading = false
        console.log(error)
      }
    })
       
  }

 
}
