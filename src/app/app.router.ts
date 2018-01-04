import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ForInstitutionsComponent } from './for-institutions/for-institutions.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'for-institutions', component: ForInstitutionsComponent },
    { path: '**', component: HomeComponent }
];

export const RoutesProvider: any[] = [];

export const RoutesContainer: ModuleWithProviders = RouterModule.forRoot(routes);
