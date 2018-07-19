import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Observable } from 'rxjs';
import { Athlete } from '../model/athlete';
import { RestConstants } from '../service/RestConstants';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'addAthlete',
  templateUrl: './addAthlete.html',
  styleUrls: ['./addAthlete.css']
})
export class AddAthleteComponent implements OnInit {

  private genders : Array<String> = [];
  
  constructor(private restService : SimpleRestApiService) {
    
    this.restService.getUrlService(RestConstants.LIST_GENDERS).subscribe( 
      (next : String[]) => {
        next.forEach(element => {
          this.genders.push(element);  
        });
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

    let object : Athlete = <Athlete>({
        id : 0,
        firstName : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth,
        gender : gender,
        club : club,
        country : country
    });
      

    this.restService.updateService(RestConstants.ADD_ATHLETE, object
       ).subscribe(
          (data) => alert("Atletičar je dodan."),
          (err) => alert("Dogodila se pogreška.\n" + err)
            
         );

  }

  ngOnInit() { 

  }

}