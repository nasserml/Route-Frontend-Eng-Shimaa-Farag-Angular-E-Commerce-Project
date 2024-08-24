import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { LogExecution } from '../decorator/log-execution.decorator';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient, private _loggingService:LoggingService) { }



  // @LogExecution
  getCategories():Observable<any>{
    // this._loggingService.logInfo("Get Categories");
    return this._http.get(`${Environment.BASE_URL}categories`)
  }
}
