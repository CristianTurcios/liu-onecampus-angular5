import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public languages: any = [
        'en',
        'es',
        'pt'
    ];
    public showLanguages = false;
    public selectedLanguage = 'en';

    constructor() { }

    ngOnInit() { }

    toggleLanguageMenu() {
        this.showLanguages = !this.showLanguages;
    }

    changeLanguage(lang) {
        this.selectedLanguage = lang;
    }

}
