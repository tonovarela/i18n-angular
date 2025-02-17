import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
cookieService = inject(SsrCookieService);
translateService = inject(TranslateService);
currentLang= signal<string>('');

  changeLang(lang: string) {    
    this.cookieService.set('lang', lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.currentLang.set(lang);

  }
  

}
