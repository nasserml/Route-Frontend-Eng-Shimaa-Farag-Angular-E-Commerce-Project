import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-stars',
  standalone: true,
  imports: [],
  templateUrl: './product-stars.component.html',
  styleUrl: './product-stars.component.scss'
})
export class ProductStarsComponent {

  @Input() ratingAverageStars!:number;

}
