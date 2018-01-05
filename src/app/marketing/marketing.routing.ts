import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketingComponent } from './marketing.component';

const routes: Routes = [
    { path: 'marketing', component: MarketingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MarketingRoutingModule { }
