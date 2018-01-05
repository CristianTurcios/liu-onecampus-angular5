import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupportComponent } from './support.component';

const routes: Routes = [
    { path: 'support', component: SupportComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SupportRoutingModule { }