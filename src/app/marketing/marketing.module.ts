import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing.routing';

import { MarketingIntroComponent } from './intro/intro.component';
import { MarketingLearningSeriesComponent } from './learning-series/learning-series.component';
import { MarketingCoursesAndProgramsComponent } from './courses-programs/courses-programs.component';

@NgModule({
    imports: [
        CommonModule,
        MarketingRoutingModule
    ],
    declarations: [
        MarketingComponent,
        MarketingIntroComponent,
        MarketingLearningSeriesComponent,
        MarketingCoursesAndProgramsComponent
    ]
})
export class MarketingModule { }
