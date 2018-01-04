import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesContainer, RoutesProvider } from './app.router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { SupportComponent } from './components/support/support.component';
import { SupportIntroComponent } from './components/support/support-intro/support-intro.component';
import { SupportDescriptionComponent } from './components/support/support-description/support-description.component';
import { SuccessTipsComponent } from './components/support/success-tips/success-tips.component';
import { SupportUniversitiesComponent } from './components/support/support-universities/support-universities.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntroComponent,
    SupportComponent,
    SupportIntroComponent,
    SupportDescriptionComponent,
    SuccessTipsComponent,
    SupportUniversitiesComponent,
  ],
  imports: [
    BrowserModule,
    RoutesContainer,
    HttpModule
  ],
  providers: [RoutesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
