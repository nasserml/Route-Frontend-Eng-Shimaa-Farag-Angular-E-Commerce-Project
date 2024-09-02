import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { ProductComponent } from "../product/product.component";
import { LoadingComponent } from '../loading/loading.component';
import { LogExecution } from '../../../shared/decorator/log-execution.decorator';
import { ProductsSearchService } from '../../../shared/services/products-search.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { FilterProductsPipe } from '../../../shared/pipe/filter-products.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, LoadingComponent, FilterProductsPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit  {
  productList:Product[]= [];
  // productList:WritableSignal<Product[]>= signal([])
  // productList.set();
  


  @Input() searchTerm: string='';


  // private productsSearchService= inject(ProductsSearchService);
  private wishlistService = inject(WishlistService);

  
  constructor(private _product:ProductService){

  }



  ngOnInit(): void {
    
    this.getAllProducts();
    // this.wishlistService.setWishlistProductsIdsArr();
    // this.productsSearchService.searchQuery.subscribe((query)=>{
    //   this.searchProducts(query)
    // })
  }





  // @LogExecution
  getAllProducts(){
    this._product.getProducts().subscribe({

      
      next:(response)=> {
        this.productList = response.data;
      },
      error:(error) =>{
        console.log(error);
      }
    })
  }


}
