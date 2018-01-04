import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForInstitutionsComponent } from './for-institutions.component';
import { ForInstitutionsRoutingModule } from './for-institutions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForInstitutionsRoutingModule
  ],
  declarations: [ForInstitutionsComponent]
})
export class ForInstitutionsModule { }
