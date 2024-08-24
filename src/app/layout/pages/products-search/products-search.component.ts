import { Component, inject } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { ProductsSearchService } from '../../../shared/services/products-search.service';

@Component({
  selector: 'app-products-search',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './products-search.component.html',
  styleUrl: './products-search.component.scss'
})
export class ProductsSearchComponent {

  search!:string;

  // private productsSearchService=  inject(ProductsSearchService);

  searchProducts(e:any):void {

    this.search = e.target.value ;

    // this.productsSearchService.setSearchQuery(e.target.value)
    

  }

}
