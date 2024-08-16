import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from '../../Base/Environment';
import { LogExecution } from '../decorator/log-execution.decorator';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }



  @LogExecution
  getCategories():Observable<any>{
    return this._http.get(`${Environment.BASE_URL}categories`)
  }
}
