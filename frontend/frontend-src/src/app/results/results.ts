import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';
import { ActivatedRoute, Params } from '@angular/router';
import { Result } from '../model/result';
import { Athlete } from '../model/athlete';

@Component({
  selector: 'results',
  templateUrl: './results.html',
  styleUrls: ['./results.css']
})
export class ResultsComponent implements OnInit {
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018.";

  private competitionId : number = 0;
  private resultsMap : Map<number, Array<Result>> = new Map();
  private disciplines : Set<String> = new Set();

  private results : Array<ResultStructure> = new Array();

  constructor(private restService : SimpleRestApiService, private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
        this.competitionId = params['id'];
        this.restService.getUrlServiceWithParams(RestConstants.GET_RESULTS, {id : this.competitionId}).subscribe(
            (next : Result[]) => {
                next.forEach(element => {
                    
                    if(this.resultsMap.has(element.athleteId)) {
                        let list = this.resultsMap.get(element.athleteId);
                        list.push(element);
                        this.resultsMap.set(element.athleteId, list);
                    } else {
                        this.resultsMap.set(element.athleteId, new Array(element));
                    }
                    this.disciplines.add(element.discipline);
                }); 
                
                this.constructResult();
            }
        );
    }); 
  
  }

  private constructResult() : void {
      this.resultsMap.forEach((value: Result[], key : number) => {
        
        let result : ResultStructure = <ResultStructure>({
            athleteId : 0,
            user : this.getEmptyUser(),
            total : 0,
            points : new Array()
        });

        this.disciplines.forEach(discipline => {
          let point = 0;
          for(let i = 0; i < value.length; ++i) {
              console.log(value[i].discipline + " " + discipline + " " + value[i].points);
              if(value[i].discipline == discipline) {
                point = value[i].points;
              }
          }
          console.log("points " + point);
          result.points.push(point);
          console.log(result.points);
          result.total += point;
        });
        console.log(result);
        result.athleteId = key;
        this.results.push(result);
      });
      
      this.results.sort((obj1, obj2) => {
        if(obj1.total > obj2.total) {
            return -1;
        } else if(obj1.total < obj2.total){
            return 1;
        } else {
            return 0;
        }
      });
      this.getUsersInfo();
      console.log("GOTOVO");
      console.log(this.results);
  }

  private getUsersInfo() {
        this.results.forEach(element => {
            //console.log(element);
            this.restService.getUrlServiceWithParams(RestConstants.GET_ATHLETE_INFO, {id : element.athleteId}).subscribe(
                (next : Athlete) => {
                    element.user = next;
                }
            );
        });
  }

  private getEmptyUser() :Athlete {
    return <Athlete>({
        id : 0,
        competitionId : 0,
        firstName : "",
        lastName : "",
        country : "",
        club : "",
        gender : "",
        dateOfBirth : "",
        bib : ""
    });
  }
}
export interface ResultStructure {
    athleteId : number;
    user : Athlete;
    total : number;
    points : Array<number>;
}