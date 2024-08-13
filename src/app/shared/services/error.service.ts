import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorMessage: string = '';

  constructor() { }

  setErrorMessage(message:string):void {
    this.errorMessage = message;
  }

  getErrorMessage():string{
    return this.errorMessage;

  }

  clearErrorMessage():void {
    this.errorMessage = '';
  }
}
