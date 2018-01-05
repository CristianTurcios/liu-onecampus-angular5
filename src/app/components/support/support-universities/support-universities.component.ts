import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../../providers/cms.providers';

@Component({
    selector: 'app-support-universities',
    templateUrl: './support-universities.component.html',
    providers: [WagtailProvider]
})
export class SupportUniversitiesComponent implements OnInit {
    private universitiesList: any[];
    private isLoading: boolean;
    private helpAndSupport: any;
    private displaySelect: boolean;
    private selectedUniversity: any;
    private showUniversities: boolean;
    private findHelpFromYourUniversity: any;

    constructor(private _pagesProvider: WagtailProvider) {
        this.isLoading = true;
        this.displaySelect = false;
        this.showUniversities = true;
    }

    ngOnInit() {
        this._pagesProvider.getPage('support-universities', 'home.Folder').subscribe(result => {
            this.findHelpFromYourUniversity = result.items[0] || {};

            if (this.findHelpFromYourUniversity.id) {
                this._pagesProvider.getChildren(this.findHelpFromYourUniversity.id,
                    'home.Institution').subscribe(childrenResult => {
                    this.universitiesList = childrenResult.items;
                    this.isLoading = false;
                }, error => {
                    const errorMessage = <any>error;
                    console.log(errorMessage);
                });
            }
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

    selectUniversity(university: any) {
        this.showUniversities = false;
        this.selectedUniversity = university;
        this.loadHelpSupport('en', university);
    }

    loadHelpSupport(lang: string = 'en', university: any) {
        this.isLoading = true;
        this._pagesProvider.getPage(`support-${university.acronym}`, 'home.LandingPage').subscribe(result => {
            this.helpAndSupport = result.items[0];
            this.isLoading = false;
        }, error => {
            const errorMessage = <any>error;
            console.log(errorMessage);
        });
    }

    changeUniversity() {
        this.showUniversities = true;
        this.displaySelect = true;
    }

    closeHelpSupport = () => {
        this.showUniversities = true;
        this.displaySelect = false;
    }

}
