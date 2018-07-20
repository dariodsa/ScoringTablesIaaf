import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';
import { ActivatedRoute, Params } from '@angular/router';
import { Result } from '../model/result';

@Component({
  selector: 'results',
  templateUrl: './results.html',
  styleUrls: ['./results.css']
})
export class ResultsComponent implements OnInit {
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018.";

  private competitionId : number = 0;
  private resultsMap : Map<number, Array<Result>>;
  private disciplines : Set<String>;

  constructor(private restService : SimpleRestApiService, private route : ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.competitionId = params['id'];
    }); 
  
    this.restService.getUrlServiceWithParams(RestConstants.GET_RESULTS, {id : this.competitionId}).subscribe(
        (next : Result[]) => {
            next.forEach(element => {
                let list = this.resultsMap.get(element.athleteId);
                list.push(element);
                this.resultsMap.set(element.athleteId, list);
                this.disciplines.add(element.discipline);
            }); 
        }
    );
  }
}
export interface ResultStructure {
    athleteId : number;
    total : number;
    points : Array<number>;
}