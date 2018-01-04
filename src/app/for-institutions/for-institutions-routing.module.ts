import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForInstitutionsComponent } from './for-institutions.component';

const routes: Routes = [
    { path: 'for-institutions', component: ForInstitutionsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ForInstitutionsRoutingModule { }
