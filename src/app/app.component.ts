import { Component,  inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";

import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  cookieService = inject(SsrCookieService);
  languageService = inject(LanguageService);

  constructor() {    
    const lang= this.cookieService.check('lang') ? this.cookieService.get('lang') : 'en';      
      console.log('Language from cookie', lang);
            
     this.languageService.changeLang(lang);        
  }

  
  
}
