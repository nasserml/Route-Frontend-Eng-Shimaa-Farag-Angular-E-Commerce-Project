import { Component, inject } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ProductsSearchService } from '../../../shared/services/products-search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-search',
  standalone: true,
  imports: [ProductsComponent, FormsModule],
  templateUrl: './products-search.component.html',
  styleUrl: './products-search.component.scss'
})
export class ProductsSearchComponent {

  searchTerm:string ='';



}
