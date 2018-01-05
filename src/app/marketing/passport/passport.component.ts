import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';


@Component({
    selector: 'app-marketing-passport',
    templateUrl: './passport.component.html',
    providers: [WagtailProvider]
})
export class MakertingPassportComponent implements OnInit {

    public passportPage: any;

    constructor(
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-passport', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.passportPage = result.items[0];
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }
}
