import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'app-home-learning-series',
    templateUrl: './learning-series.component.html',
    providers: [WagtailProvider]
})
export class HomeLearningSeriesComponent implements OnInit {
    public learningPage: any = '';

    constructor (
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-series', 'home.Video').subscribe(result => {
            if (result.items.length === 1) {
                this.learningPage = result.items[0];
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

}
