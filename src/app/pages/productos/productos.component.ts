import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
  selector: 'app-productos',
  imports: [RouterLink,LanguageSelectorComponent],
  templateUrl: './productos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductosComponent { }
