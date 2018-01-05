import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'app-home-intro',
    templateUrl: './intro.component.html',
    providers: [WagtailProvider]
})
export class MarketingIntroComponent implements OnInit {
    public introPage: any = '';

    constructor (
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-intro', 'home.Video').subscribe(result => {
            if (result.items.length === 1) {
                this.introPage = result.items[0];
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

}
