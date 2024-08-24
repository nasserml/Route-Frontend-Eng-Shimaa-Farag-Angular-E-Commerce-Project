import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { ProductComponent } from "../product/product.component";
import { LoadingComponent } from '../loading/loading.component';
import { LogExecution } from '../../../shared/decorator/log-execution.decorator';
import { ProductsSearchService } from '../../../shared/services/products-search.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit , OnChanges {
  productList:Product[]= []

  @Input() search!:string;

  // private productsSearchService= inject(ProductsSearchService);

  
  constructor(private _product:ProductService){

  }



  ngOnInit(): void {
    
    this.getAllProducts();
    // this.productsSearchService.searchQuery.subscribe((query)=>{
    //   this.searchProducts(query)
    // })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.searchProducts();
    
  }

  searchProducts(){


    // if(query.trim() == '') {
    //   this.getAllProducts();
    // } else {
    //   this.productList = this.productList.filter(product => {
    //     return product.title.toLowerCase().includes(query.toLowerCase());
    //   })
    // }

    if(this.search === ''){
      this.getAllProducts();
    } else {
      this.productList = this.productList.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase()) 
        //  || product.description.toLowerCase().includes(this.search.toLowerCase())||
        // product.category.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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
