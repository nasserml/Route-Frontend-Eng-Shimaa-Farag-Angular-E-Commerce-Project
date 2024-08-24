import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsSearchService {

  private _searchQuery:BehaviorSubject<string>= new BehaviorSubject<string>('');

  searchQuery = this._searchQuery.asObservable();

  setSearchQuery(query: string):void{
    this._searchQuery.next(query);
  }





  constructor() { }
}
