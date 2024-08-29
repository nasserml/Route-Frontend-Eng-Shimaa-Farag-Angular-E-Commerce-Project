import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(productList: Product[], title:string): Product[] {
    
    return productList.filter(function(prod) {
      return prod.title.toLowerCase().includes(title.toLowerCase());
    });
  }

}
