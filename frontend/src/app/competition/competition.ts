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
  
  newResult : boolean = false;
  newAthlete : boolean = false;
  competitionId : number;


    constructor(private restService : SimpleRestApiService, private route : ActivatedRoute) {
      
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
