import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/interface/category';
import { LoadingComponent } from '../../pages/loading/loading.component';

@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CarouselModule, LoadingComponent ],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss'
})
export class CategorySliderComponent implements OnInit {

  categoryList:Category[] = [];

  constructor(private _categoryService:CategoryService){}

  ngOnInit(): void {

    this.getCategories();
    
  }

  getCategories():void{
    this._categoryService.getCategories().subscribe({
      next: (response)=> {

        this.categoryList = response.data

      }, 
      error: (error) => {
        console.log({error})
      }
    })
  }



  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    autoplay:true,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav:false
  }

}
