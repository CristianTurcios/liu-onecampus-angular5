import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing.routing';

import { MarketingIntroComponent } from './intro/intro.component';
import { MarketingLearningSeriesComponent } from './learning-series/learning-series.component';
import { MarketingCoursesAndProgramsComponent } from './courses-programs/courses-programs.component';
import { MakertingPassportComponent } from './passport/passport.component';
import { MakertingConnectComponent } from './connect/connect.component';

@NgModule({
    imports: [
        CommonModule,
        MarketingRoutingModule
    ],
    declarations: [
        MarketingComponent,
        MarketingIntroComponent,
        MarketingLearningSeriesComponent,
        MarketingCoursesAndProgramsComponent,
        MakertingPassportComponent,
        MakertingConnectComponent
    ]
})
export class MarketingModule { }
