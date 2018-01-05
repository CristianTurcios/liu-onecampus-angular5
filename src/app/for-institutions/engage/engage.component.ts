import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'for-institutions-engage',
    templateUrl: './engage.component.html',
    styleUrls: ['./engage.component.css'],
    providers: [WagtailProvider]
})
export class EngageComponent implements OnInit {

    public engageData: any = '';

    constructor(
        private _pagesProvider: WagtailProvider
    ) { }

    ngOnInit() {
        this._pagesProvider.getPage('two-ways-to-engage-section', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.engageData = result.items[0];
            }
        }, error => {
            console.log(error);
        });
    }

}
