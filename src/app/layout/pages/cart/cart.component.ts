import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, afterRender, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { error } from 'console';
import { LoggingService } from '../../../shared/services/logging.service';
import { CartData, Data, Products } from '../../../shared/interface/cart-data';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [LoadingComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit{


  isUpdateLoading:boolean = false;

  isLoading:boolean = true;

  isCartEmpty: boolean = false;
  cartItems!:Data;
  productList!:Products[];

  // track loading state for individula items
  itemsLoadingState: Record<string, boolean> = {};

  constructor(private _cart: CartService, private _loggingService:LoggingService){

    this.getCartProductItems()
   }

  ngOnInit(): void {

  
    
  }

  getCartProductItems() {

    // this._loggingService.logInfo("Get cart product items");
    this._cart.getCartProduct().subscribe({
      
      next:(res:CartData) => {
        this.isLoading = false;

      

        if(res.numOfCartItems == 0) {
           this.isCartEmpty = true;
        }
        // this.isCartEmpty = false;
        this.cartItems = res.data;
        this.productList = res.data.products
      },
      error:(error) => {
        this.isCartEmpty = true;
        this.isLoading = false
        console.log(error.error)
      }
    })
  }

  updateCart(productId:string, count:number){

    this.itemsLoadingState[productId] = true;


    if(count <= 0 ) {
      return this.deleteItem(productId);
      
    }
    this._cart.updateProductInCart(productId, count).subscribe({
      next:(res)=>{
        this._cart.cartItemNumber.next(res.numOfCartItems);

        this.getCartProductItems();
        this.itemsLoadingState[productId] = false;
      },
      error:(error)=>{
        console.log(error);
        this.itemsLoadingState[productId] = false;
      }
    })
  }

  deleteItem(productId:string){
    this.itemsLoadingState[productId] = true;
    this._cart.deleteProductInCart(productId).subscribe({
      next:(res:CartData)=>{
        this.getCartProductItems();
        this._cart.cartItemNumber.next(res.numOfCartItems);
        this._loggingService.logInfo('Product deleted successfully');
        this.itemsLoadingState[productId] = false;

      },
      error:(error)=>{
        
        console.log(error);
        this.itemsLoadingState[productId] = false;
      }
    })
  }

  onBlurUpdateCart(productId:string, event:any) {

    if(event.target.value == event.target.placeholder)  { 
      
      return}



      this.itemsLoadingState[productId] = true;
      this.updateCart(productId, event.target.value)
  }

  clearCart(){
    this._cart.clearUserCart().subscribe({
      next:(res)=>{


        // this._loggingService.logInfo('Cart cleared successfully');
        this._cart.cartItemNumber.next(0);
        this.isCartEmpty = true;
        this.isLoading = false;
        this.productList = [];
        this.cartItems 
        
        
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  trackCartProduct(index: number, cartProduct:Products): string {
    return cartProduct._id;
  }
  

}
