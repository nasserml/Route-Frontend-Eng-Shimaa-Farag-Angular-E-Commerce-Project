import { Component, inject, Input } from '@angular/core';
import { WishlistProduct } from '../../../shared/interface/response-get-wishtlist';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { WishlistService } from '../../../shared/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseAddToWishList } from '../../../shared/interface/response-add-to-wish-list';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist-product',
  standalone: true,
  imports: [ProductStarsComponent, AddToCartButtonComponent, LoadingComponent, RouterLink],
  templateUrl: './wishlist-product.component.html',
  styleUrl: './wishlist-product.component.scss'
})
export class WishlistProductComponent {

  @Input() wishlistProduct!:WishlistProduct;

  isDelete:boolean = false;
  private wishlistService = inject(WishlistService);
  private toastrService = inject(ToastrService);



  deleteProductFromWishlist(productId:string):void {
    this.isDelete = true;
    this.wishlistService.deleteProductFromWishList(productId).subscribe({
      next:(response: ResponseAddToWishList) =>{
        
        // this.getWishListProduct();
        this.toastrService.success('Product deleted successfully from wishlist');
        
      }, 
      error: (error) => {
        this.isDelete = false;
        console.log(error);
        this.toastrService.error('Error deleting product from wishlist');
        this.wishlistService.isDeletedClick.next(false);
      }, 
      complete: () =>{
        this.wishlistService.isDeletedClick.next(true);
        this.wishlistService.isDeletedClick.next(false);

      }
    })
   }

}
