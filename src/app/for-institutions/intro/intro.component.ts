import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'for-institutions-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css'],
    providers: [WagtailProvider]
})
export class IntroComponent implements OnInit {

    public introPage: any = '';

    constructor(
        private _pagesProvider: WagtailProvider
    ) { }

    ngOnInit() {
        this._pagesProvider.getPage('for-institutions-header', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.introPage = result.items[0];
            }
        }, error => {
            console.log(error);
        });
    }

}
