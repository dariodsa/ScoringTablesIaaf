import { Component, OnInit } from '@angular/core';
import { SimpleRestApiService } from '../service/simple-rest-api-service';
import { Observable } from 'rxjs';
import { Athlete } from '../model/athlete';
import { RestConstants } from '../service/RestConstants';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'athletes',
  templateUrl: './athletes.html',
  styleUrls: ['./athletes.css']
})
export class AthletesComponent implements OnInit {

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
 
  ngOnInit() { 

  }

}