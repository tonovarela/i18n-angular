import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent implements OnInit {
  languageService = inject(LanguageService);
  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  ngOnInit(): void {    
  } 

  onChangeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lan = target.value;
    this.languageService.changeLang(lan);
    console.log('Language changed to--', lan);
}

  selectedLanguage=this.languageService.currentLang;

}
