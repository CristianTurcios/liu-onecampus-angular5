import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'for-institutions-school-card',
    templateUrl: './school-card.component.html',
    styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent implements OnInit {

    @Input() school: any;

    constructor() { }

    ngOnInit() {
    }

}
