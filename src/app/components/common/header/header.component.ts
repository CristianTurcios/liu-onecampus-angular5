import { Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    public languages: any = [
        'en',
        'es',
        'pt'
    ];
    public showLanguages = false;
    public selectedLanguage = 'en';

    private translateService: TranslateService;
    constructor(translateService: TranslateService) {
      this.translateService = translateService;
    }

    toggleLanguageMenu() {
        this.showLanguages = !this.showLanguages;
    }

    changeLanguage(language: string): void {
        this.selectedLanguage = language;
        this.translateService.use(language).subscribe(() => {
          // this.loadMenus();
        });
    }
}
