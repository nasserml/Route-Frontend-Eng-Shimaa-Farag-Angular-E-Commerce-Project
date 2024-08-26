import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/interface/product';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";
import { RouterLink } from '@angular/router';
import { AddToCartButtonComponent } from "../add-to-cart-button/add-to-cart-button.component";
import { AddToWishlistButtonComponent } from "../add-to-wishlist-button/add-to-wishlist-button.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductStarsComponent, RouterLink, AddToCartButtonComponent, AddToWishlistButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

}
