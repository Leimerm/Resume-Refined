import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { TrainingComponent } from './training/training.component';
import { CurrentEmploymentComponent } from './current-employment/current-employment.component';
import { PastEmploymentComponent } from './past-employment/past-employment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroductionComponent,
    EducationComponent,
    TrainingComponent,
    CurrentEmploymentComponent,
    PastEmploymentComponent,
    PortfolioComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
