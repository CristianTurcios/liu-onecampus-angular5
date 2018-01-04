import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesContainer, RoutesProvider } from './app.router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { ForInstitutionsComponent } from './for-institutions/for-institutions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ForInstitutionsComponent
  ],
  imports: [
    BrowserModule,
    RoutesContainer
  ],
  providers: [RoutesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
