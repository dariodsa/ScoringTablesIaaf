import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Competition } from '../model/competition';
import { RestConstants } from '../service/RestConstants';
import { AppComponent } from '../app.component';

@Component({
  selector: 'competitions',
  templateUrl: './competitions.html',
  styleUrls: ['./competitions.css']
})
export class CompetitionsComponent implements OnInit {
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018.";

  competitions : Array<Competition> = [];
  
  newCompetition : boolean = false;

  ableToAddCompetition : boolean = false;
  userId : number;

  constructor(private restService : SimpleRestApiService) {
    
     this.initCompetitions();
     this.userId = AppComponent.getUserId();

     if(this.userId != -1) {
       this.ableToAddCompetition = true;
     }
  }


  ngOnInit() {}

  private showNewCompetition() : void {
    if(this.userId == -1) {
      this.newCompetition = false;
      return;
    }
    this.newCompetition = !this.newCompetition;
  }

  private addCompetition() : void {
    if(this.userId == -1) return;

    let competitionName = (<HTMLInputElement>document.getElementById("competitionName")).value;
    let competitionType = (<HTMLInputElement>document.getElementById("competitionType")).value;
    let competition : Competition = <Competition>({
              id : 0,
              name : competitionName,
              competitionType : competitionType,
              authorId : AppComponent.getUserId()
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
        for(let i=0;i<this.competitions.length; ++i) {
          if(this.competitions[i].competitionType == "OUTDOOR") {
            this.competitions[i].competitionType = "Vanjsko";
          } else {
            this.competitions[i].competitionType = "Dvoransko";
          }
        }
      }
    );
  }
  private deleteCompetition(id : number) : void {
    if(confirm("Jeste li sigurni da želite obrisati natjecanje?")) {
      this.restService.getUrlServiceWithParams(RestConstants.DELETE_COMPETITION, {id : id}).subscribe(
        (data) => {
          alert("Natjecanje je obrisano.");
          this.initCompetitions();
        },
        (err) => {
          alert("Dogodila se pogreška.");
        }
      );
    }
  }
}