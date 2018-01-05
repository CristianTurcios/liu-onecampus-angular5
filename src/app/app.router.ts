import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MarketingComponent } from './marketing/marketing.component';

const routes: Routes = [
    { path: '', component: MarketingComponent },
    { path: '**', component: MarketingComponent }
];

export const RoutesProvider: any[] = [];

export const RoutesContainer: ModuleWithProviders = RouterModule.forRoot(routes);
