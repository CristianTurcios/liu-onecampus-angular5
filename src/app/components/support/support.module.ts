import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';
import { SupportIntroComponent } from './support-intro/support-intro.component';
import { SupportDescriptionComponent } from './support-description/support-description.component';
import { SupportUniversitiesComponent } from './support-universities/support-universities.component';
import { SupportSuccessTipsComponent } from './support-success-tips/support-success-tips.component';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule
  ],
  declarations: [
    SupportComponent,
    SupportIntroComponent,
    SupportDescriptionComponent,
    SupportUniversitiesComponent,
    SupportSuccessTipsComponent]
})
export class SupportModule { }
