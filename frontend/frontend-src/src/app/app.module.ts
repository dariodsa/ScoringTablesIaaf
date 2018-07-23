import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main';
import { AppRoutingModule } from './app-routing.module';
import { SimpleRestApiService } from './service/simple-rest-api-service';
import { ComponentInjectorService } from './service/ComponentInjectorService';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { CompetitionsComponent } from './competitions/competitions';
import { CompetitionToolbarComponent } from './competition/competition';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results';
import { Countries } from './model/countires';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CompetitionsComponent,
    CompetitionToolbarComponent,
    ResultsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [ComponentInjectorService, SimpleRestApiService, Countries],
  bootstrap: [AppComponent]
})
export class AppModule { }
