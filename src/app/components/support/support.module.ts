import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';
import { SuccessTipsComponent } from './success-tips/success-tips.component';
import { SupportIntroComponent } from './support-intro/support-intro.component';
import { SupportDescriptionComponent } from './support-description/support-description.component';
import { SupportUniversitiesComponent } from './support-universities/support-universities.component';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule
  ],
  declarations: [
    SupportComponent,
    SuccessTipsComponent,
    SupportIntroComponent,
    SupportDescriptionComponent,
    SupportUniversitiesComponent]
})
export class SupportModule { }
