import { Component, inject, OnInit } from '@angular/core';
import { ResponseGetWishtlist, WishlistProduct } from '../../../shared/interface/response-get-wishtlist';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { response } from 'express';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { ResponseAddToWishList } from '../../../shared/interface/response-add-to-wish-list';
import { LoadingComponent } from "../loading/loading.component";
import { ToastrService } from 'ngx-toastr';
import { WishlistProductComponent } from "../wishlist-product/wishlist-product.component";

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [ProductStarsComponent, AddToCartButtonComponent, LoadingComponent, WishlistProductComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent  implements OnInit{

   wishlistProducts!: WishlistProduct[];
   isLoading:boolean = true;
   isWishListEmpty:boolean = false;
   isDelete:boolean = false;
   
   private wishlistService = inject(WishlistService);
   private toastrService = inject(ToastrService);


   ngOnInit(): void {
    this.wishlistService.isDeletedClick.subscribe({
      next: (response) => {
        if(response == true) {
          this.getWishListProduct();
        }
      }
    })

    this.getWishListProduct();
  
   }

   getWishListProduct() : void {
    
    this.wishlistService.getProductsInWishlist().subscribe({
      next: (response : ResponseGetWishtlist) => {
        if(response.count == 0 ){
          this.isWishListEmpty = true;
          this.isLoading = false;
          return
          
        }
        this.wishlistService.setWishlistProductsIdsArr();
        this.wishlistProducts  = response.data;
        this.isLoading=false;
      }, 
      error:(error) => {
        console.log(error);
      }
    })
   }

   deleteProductFromWishlist(productId:string):void {
    this.isDelete = true;
    this.wishlistService.deleteProductFromWishList(productId).subscribe({
      next:(response: ResponseAddToWishList) =>{
        this.isDelete = false;
        this.getWishListProduct();
        
        this.toastrService.success('Product deleted successfully from wishlist');
      }, 
      error: (error) => {
        this.isDelete = false;
        console.log(error);
        this.toastrService.error('Error deleting product from wishlist');
      }
    })
   }



}
