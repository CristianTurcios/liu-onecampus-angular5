import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing.routing';

import { HomeIntroComponent } from './intro/intro.component';
import { HomeLearningSeriesComponent } from './learning-series/learning-series.component';

@NgModule({
    imports: [
        CommonModule,
        MarketingRoutingModule
    ],
    declarations: [
        MarketingComponent,
        HomeIntroComponent,
        HomeLearningSeriesComponent
    ]
})
export class MarketingModule { }
