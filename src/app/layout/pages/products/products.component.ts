import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { ProductComponent } from "../product/product.component";
import { LoadingComponent } from '../loading/loading.component';
import { LogExecution } from '../../../shared/decorator/log-execution.decorator';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productList:Product[]= []

  
  constructor(private _product:ProductService){

  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
  }

  @LogExecution
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
