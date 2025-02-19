import { inject, Injectable, InjectionToken, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>('SERVER_LANG_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
cookieService = inject(SsrCookieService);
translateService = inject(TranslateService);
currentLang= signal<string>('');

  changeLang(lang: string) {    
    this.cookieService.set('lang', lang);
    console.log('Service :Language changed to', lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.currentLang.set(lang);

  }
  

}
