import { Component, inject, input, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { LoadingComponent } from "../loading/loading.component";
import { ResponseAddToWishList } from '../../../shared/interface/response-add-to-wish-list';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { ResponseGetWishtlist } from '../../../shared/interface/response-get-wishtlist';
import { response } from 'express';

@Component({
  selector: 'app-add-to-wishlist-button',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrl: './add-to-wishlist-button.component.scss'
})
export class AddToWishlistButtonComponent implements OnInit{

  private wishListService = inject(WishlistService);
  private _toastr = inject(ToastrService);

  @Input() productId!: string;
  

  isBtnLoading:boolean = false;
  isAddBtnClicked:boolean = false;

  ngOnInit(): void {

      this.wishListService.wishlistProductsIdArr.subscribe({
      next: (response) => {

        this.isAddBtnClicked = response.includes(this.productId);

      }
    })

  }

  addToWishlist(): void {
    this.isAddBtnClicked = true;
    this.isBtnLoading = true;
    this.wishListService.addProductToWishList(this.productId).subscribe({
      next: (response:ResponseAddToWishList) => {
        this._toastr.success('Product added successfully to wishlist');
        this.isBtnLoading = false;
        this.wishListService.setWishlistProductsIdsArr();
      }, 
      error: (error) => {
        console.log(error);
        this.isBtnLoading = false
        this._toastr.error('Can not add this product to wishlist');
      }
    })
  }

  deleteProductFromWishlist():void {
    this.isBtnLoading = true;
    this.wishListService.deleteProductFromWishList(this.productId).subscribe({
      next: (response:ResponseAddToWishList) => {
        this.isAddBtnClicked = false;
        this.isBtnLoading = false;
        this.wishListService.setWishlistProductsIdsArr()
        this._toastr.success('Product deleted successfully from wishlist');

      },
      error: (error) => {
        console.log(error);
        this.isBtnLoading = false;
        this._toastr.error('Can not delete this product from wishlist');
      }
    })
  }


}
