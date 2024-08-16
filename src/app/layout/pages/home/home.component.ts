import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { MainSliderComponent } from "../../additions/main-slider/main-slider.component";
import { CategorySliderComponent } from "../../additions/category-slider/category-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, MainSliderComponent, CategorySliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
