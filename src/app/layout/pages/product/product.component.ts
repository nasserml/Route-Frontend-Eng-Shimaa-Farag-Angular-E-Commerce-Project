import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/interface/product';
import { ProductStarsComponent } from "../../additions/product-stars/product-stars.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductStarsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

}
