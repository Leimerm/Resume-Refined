import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { CurrentEmploymentComponent } from './current-employment/current-employment.component';
import { EducationComponent } from './education/education.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PastEmploymentComponent } from './past-employment/past-employment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path:  'education', component: EducationComponent, pathMatch: 'full' },
  { path:  'introduction', component: IntroductionComponent, pathMatch: 'full' },
  { path:  '', component: IntroductionComponent, pathMatch: 'full' },
  { path:  'training', component: TrainingComponent, pathMatch: 'full' },
  { path:  'current-employment', component: CurrentEmploymentComponent, pathMatch: 'full' },
  { path:  'current-employment', component: CurrentEmploymentComponent, pathMatch: 'full' },
  { path:  'past-employment', component: PastEmploymentComponent, pathMatch: 'full' },
  { path:  'portfolio', component: PortfolioComponent, pathMatch: 'full' },
  { path:  'contact-info', component: ContactInfoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
