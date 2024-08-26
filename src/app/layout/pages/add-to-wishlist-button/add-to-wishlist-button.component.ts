import { Component, inject, input, Input } from '@angular/core';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { LoadingComponent } from "../loading/loading.component";
import { ResponseAddToWishList } from '../../../shared/interface/response-add-to-wish-list';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { ResponseGetWishtlist } from '../../../shared/interface/response-get-wishtlist';

@Component({
  selector: 'app-add-to-wishlist-button',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './add-to-wishlist-button.component.html',
  styleUrl: './add-to-wishlist-button.component.scss'
})
export class AddToWishlistButtonComponent {

  private wishListService = inject(WishlistService);
  private _toastr = inject(ToastrService);

  @Input() productId!: string;
  

  isBtnLoading:boolean = false;
  isAddBtnClicked:boolean = false;

  addToWishlist(): void {
    this.isBtnLoading = true;
    this.wishListService.addProductToWishList(this.productId).subscribe({
      next: (response:ResponseAddToWishList) => {
        this._toastr.success('Product added successfully to wishlist');
        this.isAddBtnClicked = true;
        this.isBtnLoading = false;
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
