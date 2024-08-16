import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interface/product';
import { ProductDetails } from '../../../shared/interface/product-details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AddToCartButtonComponent } from '../../pages/add-to-cart-button/add-to-cart-button.component';
import { ProductStarsComponent } from "../product-stars/product-stars.component";
import { ImagesProductComponent } from "../images-product/images-product.component";
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule, AddToCartButtonComponent, ProductStarsComponent, ImagesProductComponent],
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
    private _product: ProductService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['productId'];
    });

    this.getProduct();
  }

  changeImage(src:string) {
    this.imgSrc = src
  }

  getProduct() {
    this._product.getSpecificProduct(this.id).subscribe({
      next: (response) => {
        console.log('product ', response.data);
        this.productDetails = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
