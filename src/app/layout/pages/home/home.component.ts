import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { MainSliderComponent } from "../../additions/main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, MainSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
