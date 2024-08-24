import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../Base/Environment';
import { Observable } from 'rxjs';
import { LogExecution } from '../decorator/log-execution.decorator';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private _http: HttpClient,
    private loggingService:LoggingService
    ) { 
  }

  // @LogExecution
  getProducts():Observable<any>{
    // this.loggingService.logInfo("Get Products ");
    return this._http.get(`${Environment.BASE_URL}products`)
  }

  // @LogExecution
  getSpecificProduct(productId:string):Observable<any>{
    // this.loggingService.logInfo(`Get Specific Product with id  ${productId}`);
    return this._http.get(`${Environment.BASE_URL}products/${productId}`)
  }
}
