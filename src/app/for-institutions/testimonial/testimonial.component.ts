import { Component, OnInit } from '@angular/core';
import { WagtailProvider } from '../../providers/cms.providers';

@Component({
    selector: 'for-institutions-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.css'],
    providers: [WagtailProvider]
})
export class TestimonialComponent implements OnInit {

    public testimonialData: any = '';

    constructor(
        private _pagesProvider: WagtailProvider
    ) { }

    ngOnInit() {
        this._pagesProvider.getPage('testimonial-section', 'home.Video').subscribe(result => {
            if (result.items.length === 1) {
                this.testimonialData = result.items[0];
            }
        }, error => {
            console.log(error);
        });
    }

}
