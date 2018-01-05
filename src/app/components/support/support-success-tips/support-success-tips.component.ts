import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../../providers/cms.providers';

@Component({
  selector: 'app-support-success-tips',
  templateUrl: './support-success-tips.component.html',
  providers: [WagtailProvider]

})
export class SupportSuccessTipsComponent implements OnInit {
  private data: any;
  private isLoading: boolean;

  constructor(private _pagesProvider: WagtailProvider) { }


  ngOnInit() {
    this.isLoading = true;
    this._pagesProvider.getPage('support-success-tips', 'home.Folder').subscribe(result => {
      this.data = result.items[0] || {};
      if (this.data.id) {
        this._pagesProvider.getChildren(`?child_of=${this.data.id}&fields=*&type=home.Video`).subscribe(result => {
          this.data.videos = result.items || [];
          console.log('result', this.data);
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

}
