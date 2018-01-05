import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../../providers/cms.providers';

@Component({
  selector: 'app-support-universities',
  templateUrl: './support-universities.component.html',
  providers: [WagtailProvider]
})
export class SupportUniversitiesComponent implements OnInit {
  private universitiesList: any[];
  private showUniversities: boolean;
  private isLoading: boolean;
  private selectedUniversity: any;
  private helpAndSupport: any;
  private findHelpFromYourUniversity: any;

  constructor(private _pagesProvider: WagtailProvider) {
    this.isLoading = true;
    this.showUniversities = true;
  }

  ngOnInit() {
    this._pagesProvider.getPage('support-universities', 'home.Folder').subscribe(result => {
      this.findHelpFromYourUniversity = result.items[0] || {};
      if (this.findHelpFromYourUniversity.id) {
        this._pagesProvider.getChildren(`?child_of=${result.items[0].id}&fields=*&type=home.Institution`).subscribe(result => {
          this.universitiesList = result.items;
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

  loadHelpSupport(lang: string = 'en' , university: any) {
    this.isLoading = true;
    this._pagesProvider.getPage(`support-${university.acronym}`, 'home.LandingPage').subscribe(result => {
      this.helpAndSupport = result.items[0];
      console.log('La data de la universidad', this.helpAndSupport);
      this.isLoading = false;
    }, error => {
      const errorMessage = <any>error;
      console.log(errorMessage);
    });
  }





  changeUniversity() {
    this.showUniversities = true;
  }

}
