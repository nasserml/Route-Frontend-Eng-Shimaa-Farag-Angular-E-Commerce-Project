import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category, ResponseCategories } from '../../../shared/interface/response-categories';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  private categoriesService = inject(CategoryService);

  categoriesArr!:Category[]



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
  }

  getAllProducts():void{

    this.categoriesService.getCategories().subscribe({
      next: (res:ResponseCategories) => {
        this.categoriesArr = res.data
        console.log(this.categoriesArr)

      },
      error: (error) => {
        console.log(error);
      }
    })
  
  }

}
