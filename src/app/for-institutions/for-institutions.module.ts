import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForInstitutionsComponent } from './for-institutions.component';
import { ForInstitutionsRoutingModule } from './for-institutions-routing.module';
import { IntroComponent } from './intro/intro.component';
import { SchoolsComponent } from './schools/schools.component';
import { EngageComponent } from './engage/engage.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SchoolCardComponent } from './schools/school-card/school-card.component';

@NgModule({
    imports: [
        CommonModule,
        ForInstitutionsRoutingModule
    ],
    declarations: [
        ForInstitutionsComponent,
        IntroComponent,
        SchoolsComponent,
        EngageComponent,
        TestimonialComponent,
        GetStartedComponent,
        SchoolCardComponent
    ]
})
export class ForInstitutionsModule { }
