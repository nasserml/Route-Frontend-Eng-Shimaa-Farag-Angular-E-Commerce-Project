import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withHashLocation, withViewTransitions } from '@angular/router';
import {provideToastr} from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { headerTokenInterceptor } from './shared/interceptor/header/header-token.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes/*,withHashLocation()*/, withViewTransitions()), provideClientHydration(), provideHttpClient(withFetch(), withInterceptors([
    headerTokenInterceptor
  ])), importProvidersFrom(RouterModule, BrowserAnimationsModule, NgxSpinnerModule), provideAnimations(), provideToastr()]
  
};
