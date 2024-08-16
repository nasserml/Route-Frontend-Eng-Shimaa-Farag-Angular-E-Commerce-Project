import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { ProductDetails } from '../../../shared/interface/product-details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AddToCartButtonComponent } from '../../pages/add-to-cart-button/add-to-cart-button.component';
import { ProductStarsComponent } from "../product-stars/product-stars.component";
import { ImagesProductComponent } from "../images-product/images-product.component";
import { LoadingComponent } from '../../pages/loading/loading.component';
import { LogExecution } from '../../../shared/decorator/log-execution.decorator';
import { ProductProxyService } from '../../../shared/services/product-proxy.service';
import { LoggingService } from '../../../shared/services/logging.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule, AddToCartButtonComponent, ProductStarsComponent, ImagesProductComponent, LoadingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {

  imgSrc!:string;
  id!: string;
  productDetails!: ProductDetails;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService,
    private productProxyService:ProductProxyService,
    private _loggingService:LoggingService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['productId'];
    });

    this.getProduct();
    // this.getProductProxy();
  }


  @LogExecution
  getProductProxyNext(response:any):void{
    this.productDetails = response.data;
  }

  @LogExecution
  getProductProxy(){
    this.productProxyService.getProduct(this.id).subscribe({
      next:(response) => {
        this.getProductProxyNext(response);
      }, 
      error: (error) => {
        console.log(error);
      }
    })
  }

  @LogExecution
  changeImage(src:string) {
    this.imgSrc = src
  }






  @LogExecution
  getProductSubscribeNext(response:any) {
    this._loggingService.logInfo(response.data);

    this.productDetails = response.data;
  }

  @LogExecution
  getProduct() {
    this._product.getSpecificProduct(this.id).subscribe({
      next: (response) => {
        this._loggingService.logInfo(response);
        this.getProductSubscribeNext(response);
      }
      ,
      error: (error) => {
        this._loggingService.logError(error);
      },
    });
  }
}
