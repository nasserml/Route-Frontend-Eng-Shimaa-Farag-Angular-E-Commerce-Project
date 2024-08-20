import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withHashLocation, withViewTransitions } from '@angular/router';
import {provideToastr} from 'ngx-toastr';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withHashLocation(), withViewTransitions()), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(RouterModule, BrowserAnimationsModule), provideAnimations(), provideToastr()]
  
};
