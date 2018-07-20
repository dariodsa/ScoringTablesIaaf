import { Component, OnInit, ElementRef } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';
import { Result } from '../model/result';
import { ActivatedRoute, Params } from '@angular/router';

import {Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Athlete } from '../model/athlete';


@Component({
  selector: 'competition/:id',
  templateUrl: './competition.html',
  styleUrls: ['./competition.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class CompetitionToolbarComponent implements OnInit {
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018.";

  results : Array<Result> = [];

  disciplines : Array<String> = [];
  measurments : Array<String> = [];

  athletes : Array<Athlete> = [];
  
  newResult : boolean = false;
  newAthlete : boolean = false;
  showAthletes : boolean = false;

  competitionId : number;


    constructor(private restService : SimpleRestApiService, private route : ActivatedRoute) {
      
    }

  ngOnInit() {
      this.route.params.subscribe((params : Params) => {
          this.competitionId = params['id'];
      });
      this.initResults();
      this.initMeasurment();
      this.initDisciplines();
  }

  private showNewResult() : void {
    this.newResult = !this.newResult;
    this.newAthlete = false;
    this.showAthletes = false;
  }

  private showNewAthlete() : void {
    this.newAthlete = !this.newAthlete;
    this.newResult = false;
    this.showAthletes = false;
  }

  private addResult() : void {
    let athleteId = (<HTMLInputElement>document.getElementById("athlete")).value;
    let resultValue = (<HTMLInputElement>document.getElementById("result")).value;
    let discipline = (<HTMLInputElement>document.getElementById("discipline")).value;
    let measurment = (<HTMLInputElement>document.getElementById("measurment")).value;

    let result : Result = <Result>({
              id : 0,
              competitionId : this.competitionId,
              athleteId : 5,
              discipline : discipline,
              measurement : measurment,
              resultRepresentation : resultValue

    });
    
    this.restService.updateService(RestConstants.ADD_RESULT, result).subscribe(
      (data) => {
        this.showNewResult();
        this.initResults();
      },
      (err) => alert("Dogodila se pogreška.\n")
    );
  }
  addAthlete() {
    let firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    let lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    let gender = (<HTMLInputElement>document.getElementById("gender")).value;
    let date = (<HTMLInputElement>document.getElementById("dateOfBirth")).value;
    

    let dateOfBirth = date;
    let club = (<HTMLInputElement>document.getElementById("club")).value;
    let country = (<HTMLInputElement>document.getElementById("country")).value;
    let bib = (<HTMLInputElement>document.getElementById("bib")).value;

    let object : Athlete = <Athlete>({
        id : 0,
        competitionId : this.competitionId,
        firstName : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth,
        gender : gender,
        club : club,
        country : country,
        bib : bib
    });
      

    this.restService.updateService(RestConstants.ADD_ATHLETE, object
       ).subscribe(
          (data) => {
            alert("Atletičar je dodan.");
            this.newAthlete = false;
          },
          (err) => alert("Dogodila se pogreška.\n" + err)
            
         );

  }

  private showRegistedAthletes() : void {
    this.getAthletes(); 
    this.showAthletes = !this.showAthletes;
    this.newAthlete = false;
    this.newResult = false;
  }

  private getAthletes() : void {
    let array : Array<Athlete> = [];
    this.restService.getUrlServiceWithParams(RestConstants.GET_ATHLETE_COMP, {competitionId : this.competitionId}).subscribe(
      (next : Athlete[]) => {
        this.athletes = next;
      }
    );
    
  }

  private  initResults() : void {
    
    this.results = [];
    this.restService.getUrlServiceWithParams(RestConstants.GET_RESULTS, {id : this.competitionId}).subscribe(
      (next : Result[]) => {
        this.results = next;
      }
    );
  }

  private initDisciplines() : void {
      this.restService.getUrlService(RestConstants.LIST_DISCIPLINES).subscribe(
        (next : String[]) => {
            this.disciplines = next;
        }
      );
  }
  private initMeasurment() : void {
    this.restService.getUrlService(RestConstants.LIST_MEASURMENT).subscribe(
      (next : String[]) => {
          this.measurments = next;
      }
    );
  }
}
