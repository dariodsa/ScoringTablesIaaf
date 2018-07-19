import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';

@Component({
  selector: 'competitions',
  templateUrl: './competitions.html',
  styleUrls: ['./competitions.css']
})
export class CompetitionsComponent implements OnInit {
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018.";

  competitions : Array<Competition> = [];
  
  newCompetition : boolean = true;

  constructor(private restService : SimpleRestApiService) {
    
     this.initCompetitions();
  }


  ngOnInit() {}

  private showNewCompetition() : void {
    this.newCompetition = !this.newCompetition;
  }

  private addCompetition() : void {
    let competitionName = (<HTMLInputElement>document.getElementById("competitionName")).value;
    let competition : Competition = <Competition>({
              id : 0,
              name : competitionName
    });

    this.restService.updateService(RestConstants.ADD_COMPETITION, competition).subscribe(
      (data) => {
        alert("Natjecanje je dodano.");
        this.showNewCompetition();
        this.initCompetitions();
      },
      (err) => alert("Dogodila se pogreška.\n")
    );
  }

  private  initCompetitions() : void {
    
    this.competitions = [];
    this.restService.getUrlService(RestConstants.GET_COMPETITIONS).subscribe(
      (next : Competition[]) => {
        this.competitions = next;
      }
    );
  }
}