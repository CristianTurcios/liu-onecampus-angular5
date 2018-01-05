import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesContainer, RoutesProvider } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeIntroComponent } from './components/home/intro/intro.component';
import { HomeLearningSeriesComponent } from './components/home/learning-series/learning-series.component';

import { ForInstitutionsModule } from './for-institutions/for-institutions.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeIntroComponent,
    HomeLearningSeriesComponent
  ],
  imports: [
    BrowserModule,
    RoutesContainer,
    HttpModule,
    ForInstitutionsModule
  ],
  providers: [RoutesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
