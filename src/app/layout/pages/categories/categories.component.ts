import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Category, ResponseCategories } from '../../../shared/interface/response-categories';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  private categoriesService = inject(CategoryService);

  categoriesArr!:Category[]

  isLoading:boolean = true;



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllProducts();
  }

  getAllProducts():void{

    this.isLoading = true;

    this.categoriesService.getCategories().subscribe({
      next: (res:ResponseCategories) => {
        this.categoriesArr = res.data
        
        this.isLoading=false;

      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    })
  
  }

}
