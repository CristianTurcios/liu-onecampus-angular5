import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';


@Component({
    selector: 'app-marketing-courses-programs',
    templateUrl: './courses-programs.component.html',
    providers: [WagtailProvider]
})
export class MarketingCoursesAndProgramsComponent implements OnInit {

    public coursesAndProgramsPage: any;

    constructor (
        private _pagesProvider: WagtailProvider
    ) {}

    ngOnInit() {
        this._pagesProvider.getPage('home-learn', 'home.Article').subscribe(result => {
            if (result.items.length === 1) {
                this.coursesAndProgramsPage = result.items[0];
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

}
