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
import { AppComponent } from '../app.component';


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
  editId : number = -1;


  disciplines : Array<String> = [];
  measurments : Array<String> = [];

  athletes : Array<Athlete> = [];
  
  newResult : boolean = false;
  newAthlete : boolean = false;
  showAthletes : boolean = false;

  bibs : Array<string> = new Array();
  competitionId : number;
 
  competition : Competition = <Competition>({
      id : 0,
      name : "",
      authorId : -2,
      competitionType : "s"
  });

  userId : number;

  constructor(private restService : SimpleRestApiService, private route : ActivatedRoute) {
      this.userId = AppComponent.getUserId();
  }

  ngOnInit() {
      this.route.params.subscribe((params : Params) => {
          this.competitionId = params['id'];
      });
      this.restService.getUrlService(RestConstants.GET_COMPETITION_INFO + "/" + this.competitionId).subscribe(
         (next : Competition) => {
            this.competition = next;
            
            if(this.competition.authorId != this.userId) return;
            
            this.initResults();
            this.initMeasurment();
            this.initDisciplines();
          }
      );
      
      
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
    let bib = (<HTMLInputElement>document.getElementById("athlete")).value;
    
    let resultValue = (<HTMLInputElement>document.getElementById("result")).value;
    let discipline = (<HTMLInputElement>document.getElementById("discipline")).value;
    let measurment = (<HTMLInputElement>document.getElementById("measurment")).value;
    //TODO get athleteID with bib and competitionId
    this.restService.getUrlServiceWithParams(RestConstants.GET_ATHLETE_COMPID_AND_BIB, 
                {competitionId : this.competitionId,
                 bib : bib}).subscribe(
            (next : Athlete) => {
              let result : Result = <Result>({
                id : 0,
                competitionId : this.competitionId,
                athleteId : next.id,
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
    this.restService.getUrlServiceWithParams(RestConstants.GET_ATHLETES_COMP, {competitionId : this.competitionId}).subscribe(
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
        this.bibs = new Array(this.results.length);

        for(let i=0;i<this.results.length;++i) 
        {
            this.restService.getUrlServiceWithParams(RestConstants.GET_ATHLETE_INFO, {id : this.results[i].athleteId}).subscribe(
               (_athlete : Athlete) => {
                   this.bibs[i] = _athlete.bib;
               }
            );
        }
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

  private editResult( bib, discipline, time) : void {

  }

  private setEditId(id : number) : void {
    this.editId = id;
    
    (<HTMLInputElement>document.getElementById("editTime")).value = this.results[id].resultRepresentation;
    (<HTMLInputElement>document.getElementById("editDiscipline")).value = this.results[id].discipline;
    (<HTMLInputElement>document.getElementById("editBib")).value = this.bibs[id];

    console.log(document.getElementById("editTime"));
  }

  private deleteById(id : number) {
    if(confirm("Jesi li siguran da želiš obrisati rezultat?")) {
      this.restService.getUrlServiceWithParams(RestConstants.DELETE_RESULT, {id : id}).subscribe(
          (data) => {
            alert("Obrisano");
            this.initResults();
          }
      );
    }
  }

}
