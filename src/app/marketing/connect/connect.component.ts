import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'app-marketing-connect',
    templateUrl: './connect.component.html',
    providers: [WagtailProvider]
})
export class MakertingConnectComponent implements OnInit {

    public connectPage: any;

    constructor(
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-connect', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.connectPage = result.items[0];
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }
}