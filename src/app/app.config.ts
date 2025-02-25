import { ApplicationConfig,  importProvidersFrom,  provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {SsrCookieService} from 'ngx-cookie-service-ssr';
import { HttpClient, provideHttpClient,withFetch } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, 
    './i18n/', '.json'
  ); // Ruta de las traducciones
};

export const appConfig: ApplicationConfig = {

  providers: [    
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    SsrCookieService,
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })])    
  ]
};
