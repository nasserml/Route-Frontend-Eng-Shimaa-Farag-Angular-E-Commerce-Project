import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { LogExecution } from '../decorator/log-execution.decorator';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductProxyService {

  private cache = new Map<string, any>();

  constructor(private productService:ProductService) { }

  @LogExecution
  getProduct(productId:string) :Observable<any> {
    if( this.cache.has(productId)) {

      return of(this.cache.get(productId));

    }

    // Fetch data from the original service and cache it
    return this.productService.getSpecificProduct(productId).pipe(
      tap(product => this.cache.set(productId, product))
    )

  }
}
