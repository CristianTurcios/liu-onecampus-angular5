import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class WagtailProvider {
    private wagtailApi: String;
    private language: String;

    constructor(
        private _http: Http) {
            this.language = 'en';
            this.wagtailApi = `${environment.wagtailApi}`;
    }
    set lang(lang: String){
      this.language = lang;
    }
    getPage(slug, type) {
        const url = `${this.wagtailApi}/${this.language}/api/v2/pages/`;
        const search = new URLSearchParams();
        search.set('slug', slug);
        search.set('fields', '*');
        search.set('type', type);

        return this._http.get(
            url, {search: search}).map(response => response.json());
    }

    getChildren(parentId, type) {
      const url = `${this.wagtailApi}/${this.language}/api/v2/pages/`;
      const search = new URLSearchParams();
      search.set('child_of', parentId);
      search.set('type', type);
      search.set('fields', '*');
      return this._http.get(
        url, {search: search}).map(response => response.json());
    }
}
