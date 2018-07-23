import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main';
import { CompetitionsComponent } from './competitions/competitions';
import { CompetitionToolbarComponent } from './competition/competition';
import { ResultsComponent } from './results/results';
 
 
const routes: Routes = [
  { path: 'competitions', component: CompetitionsComponent},
  { path: 'results/:id', component: ResultsComponent},
  { path: 'competition/:id', component: CompetitionToolbarComponent},
  { path: 'main', component: MainComponent },
  { path: '', component: CompetitionsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}