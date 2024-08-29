import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  RouterModule,
  withHashLocation,
  withViewTransitions,
} from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { headerTokenInterceptor } from './shared/interceptor/header/header-token.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './public/assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes /*,withHashLocation()*/, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([headerTokenInterceptor])),
    importProvidersFrom(
      RouterModule,
      BrowserAnimationsModule,
      NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
      })
    ),
    provideAnimations(),
    provideToastr(),
  ],
};
