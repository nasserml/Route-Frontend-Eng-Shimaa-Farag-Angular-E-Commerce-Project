import { Component, input, Input, InputSignal } from '@angular/core';
import { Product } from '../../../shared/interface/product';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";
import { RouterLink } from '@angular/router';
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { AddToWishlistButtonComponent } from "../add-to-wishlist-button/add-to-wishlist-button.component";
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductStarsComponent, RouterLink, AddToCartButtonComponent, AddToWishlistButtonComponent, UpperCasePipe, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  // productSignal:InputSignal<Product| undefined> = input(); n
  // gOnInit(): void {

  //   console.log(this.productSignal());
    
  // }
   

}
