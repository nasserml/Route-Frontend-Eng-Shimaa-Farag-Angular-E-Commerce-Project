import { Component, Input } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { LoggingService } from '../../../shared/services/logging.service';
import { ToastrService } from 'ngx-toastr';
import { CartData } from '../../../shared/interface/cart-data';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {

  @Input() productId!: string;

  constructor(private _cart:CartService, private _loggingService:LoggingService,private _toastr:ToastrService ){}

  addProduct() {

    // this._loggingService.logInfo(`Add product to cart from add to card button component with id ${this.productId}`)
    
    this._cart.addProductToCart(this.productId).subscribe({
      next:(res)=>{
        this._cart.cartItemNumber.next(res.numOfCartItems)
        this._toastr.success(res.message,'' ,{
          progressBar: true,
          progressAnimation:'increasing',
          timeOut:2000
          
        })
      }, 
      error: (error) => {
        // this._loggingService.logError(error);
        console.log(error);
        this._toastr.error('Can not add this product to cart');
      }
    })
  }

}
