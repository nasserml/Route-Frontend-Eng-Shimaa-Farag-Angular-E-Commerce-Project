import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {



  constructor() { }

  logInfo(message:string)  {
    console.log(`Info: ${message}`);
  }

  logWarning(message:string)  {
    console.warn(`warn: ${message}`);
  }

  logError(message:string) {
    console.error(`Error: ${message}`);
  }

}
