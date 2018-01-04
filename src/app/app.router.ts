import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent}
];

export const RoutesProvider: any [] = [];

export const RoutesContainer: ModuleWithProviders = RouterModule.forRoot(routes);
