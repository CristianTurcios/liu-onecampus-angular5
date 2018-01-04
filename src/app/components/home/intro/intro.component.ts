import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../../providers/cms.providers';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    providers: [WagtailProvider]
})
export class IntroComponent implements OnInit {

    constructor (
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-intro', 'home.Video').subscribe(result => {
            console.log(result);
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

}
