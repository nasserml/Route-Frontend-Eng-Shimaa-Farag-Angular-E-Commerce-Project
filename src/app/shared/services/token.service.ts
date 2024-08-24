import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _loggingService :LoggingService) { }

  getToken(): string | null {
    // this._loggingService.logInfo("getting token from local storage");
    return localStorage.getItem('userToken');
  }
}
