import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'for-institutions-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.css'],
    providers: [WagtailProvider]
})
export class GetStartedComponent implements OnInit {

    public getStartedData: any = '';

    constructor(
        private _pagesProvider: WagtailProvider
    ) { }

    ngOnInit() {
        this._pagesProvider.getPage('get-started-section', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.getStartedData = result.items[0];
            }
        }, error => {
            console.log(error);
        });
    }
}
