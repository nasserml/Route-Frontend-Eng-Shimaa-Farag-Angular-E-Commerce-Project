import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../../shared/services/brands.service';
import { Brand, ResponseBrands } from '../../../shared/interface/response-brands';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent implements OnInit {

  private brandsService = inject(BrandsService);
  brandsArr!:Brand[];
  isLoading: boolean = true;

  ngOnInit(): void {
      this.getAllBrands();
  }

  getAllBrands():void {
    this.isLoading = true;
    this.brandsService.getBrands().subscribe({
      next: (res:ResponseBrands) => {

        this.brandsArr = res.data;

        this.isLoading = false;

      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;

      }
    })
  }

}
