import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private translateService: TranslateService){
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}
