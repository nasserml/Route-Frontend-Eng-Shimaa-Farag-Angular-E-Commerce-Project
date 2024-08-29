import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import {TranslateService} from  '@ngx-translate/core';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  private translateService = inject(TranslateService);
  private _platform_id = inject(PLATFORM_ID);

  constructor() { 
   
    this.translateService.setDefaultLang('en');
    this.changeDirectory();
    
  }

  changeDirectory(){

    if(isPlatformBrowser(this._platform_id)) {

      let savedLang = localStorage.getItem('lang')!;
      this.translateService.use(savedLang);
      if(savedLang == 'en'){
  
        document.documentElement.dir = 'ltr';
  
      } else if(savedLang == 'ar'){
  
        document.documentElement.dir = 'rtl';
  
      }
    }


  }

  changeLang(lang:string) {

    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.changeDirectory();
    


  }




}
