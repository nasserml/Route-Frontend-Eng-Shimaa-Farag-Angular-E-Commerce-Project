import { Component, inject, OnInit } from '@angular/core';
import { ResponseGetWishtlist, WishlistProduct } from '../../../shared/interface/response-get-wishtlist';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { response } from 'express';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { ResponseAddToWishList } from '../../../shared/interface/response-add-to-wish-list';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [ProductStarsComponent, AddToCartButtonComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent  implements OnInit{

   wishlistProducts!: WishlistProduct[];
   private wishlistService = inject(WishlistService);


   ngOnInit(): void {

    this.getWishListProduct();
  
   }

   getWishListProduct() : void {
    this.wishlistService.getProductsInWishlist().subscribe({
      next: (response : ResponseGetWishtlist) => {
        this.wishlistProducts  = response.data;
      }
    })
   }

   deleteProductFromWishlist(productId:string):void {
    this.wishlistService.deleteProductFromWishList(productId).subscribe({
      next:(response: ResponseAddToWishList) =>{
        console.log(response);
        this.getWishListProduct();
      }
    })
   }



}
