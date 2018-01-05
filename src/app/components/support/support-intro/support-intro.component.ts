import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../../providers/cms.providers';


@Component({
  selector: 'app-support-intro',
  templateUrl: './support-intro.component.html',
  providers: [WagtailProvider]

})
export class SupportIntroComponent implements OnInit {
  private data: any;
  private isLoading: boolean;

  constructor(private _pagesProvider: WagtailProvider) {}

  ngOnInit() {
    this.isLoading = true;
    this._pagesProvider.getPage('support-intro', 'home.Article').subscribe(result => {
      this.data = result.items[0];
      this.isLoading = false;
    }, error => {
      const errorMessage = <any>error;
      console.log(errorMessage);
    });
  }

}
