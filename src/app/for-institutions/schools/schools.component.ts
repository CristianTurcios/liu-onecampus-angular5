import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'for-institutions-schools',
    templateUrl: './schools.component.html',
    styleUrls: ['./schools.component.css'],
    providers: [WagtailProvider]
})
export class SchoolsComponent implements OnInit {

    public schoolsData: any = '';

    constructor(
        private _pagesProvider: WagtailProvider
    ) { }

    ngOnInit() {
        this._pagesProvider.getPage('participating-schools', 'home.Folder').subscribe(result => {
            if (result.items.length === 1) {
                this.schoolsData = result.items[0];
                this._pagesProvider.getChildren(this.schoolsData.id, this.schoolsData.meta.type).subscribe(childrenResult => {
                    if (childrenResult.items.length > 0) {
                        this.schoolsData.schools = childrenResult.items;
                    }
                }, error => {
                    console.log(error);
                });
            }
        }, error => {
            console.log(error);
        });
    }

}
