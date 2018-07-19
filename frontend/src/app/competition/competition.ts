import { Component, OnInit, ElementRef } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';
import { Result } from '../model/result';
import { ActivatedRoute, Params } from '@angular/router';

import {Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';


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
  
  newResult : boolean = true;
  newAthlete : boolean = true;
  competitionId : number;


  public query = '';
    public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus",
                        "Belgium","Bosnia & Herzegovina","Bulgaria","Croatia","Cyprus",
                        "Czech Republic","Denmark","Estonia","Finland","France","Georgia",
                        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo",
                        "Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta",
                        "Moldova","Monaco","Montenegro","Netherlands","Norway","Poland",
                        "Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia",
                        "Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    public filteredList = [];
    public elementRef;
 
    constructor(private restService : SimpleRestApiService, private route : ActivatedRoute, myElement: ElementRef) {
      
      //this.dataService = completerService.local(this.searchData, 'color', 'color');
      this.elementRef = myElement;
    }

  ngOnInit() {
      this.route.params.subscribe((params : Params) => {
          this.competitionId = params['id'];
          console.log(this.competitionId);
          console.log(this.route.paramMap);
      });
      this.initResults();
      this.initMeasurment();
      this.initDisciplines();
  }

  filter() {
    if (this.query !== ""){
        this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
select(item){
    this.query = item;
    this.filteredList = [];
}
handleClick(event){
  var clickedComponent = event.target;
  var inside = false;
  do {
      if (clickedComponent === this.elementRef.nativeElement) {
          inside = true;
      }
     clickedComponent = clickedComponent.parentNode;
  } while (clickedComponent);
   if(!inside){
       this.filteredList = [];
   }
}

  private showNewResult() : void {
    this.newResult = !this.newResult;
  }

  private showNewAthlete() : void {
    this.newAthlete = !this.newAthlete;
  }

  private addResult() : void {
    let athleteId = (<HTMLInputElement>document.getElementById("athlete")).value;
    let resultValue = (<HTMLInputElement>document.getElementById("result")).value;
    let discipline = (<HTMLInputElement>document.getElementById("discipline")).value;
    let measurment = (<HTMLInputElement>document.getElementById("measurment")).value;

    let result : Result = <Result>({
              id : 0,
              competitionId : this.competitionId,
              athleteId : athleteId,
              discipline : discipline,
              measurement : measurment

    });
    
    this.restService.updateService(RestConstants.ADD_RESULT, result).subscribe(
      (data) => {
        this.showNewResult();
        this.initResults();
      },
      (err) => alert("Dogodila se pogreška.\n")
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
