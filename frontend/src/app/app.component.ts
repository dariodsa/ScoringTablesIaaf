import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import { SimpleRestApiService } from './service/simple-rest-api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent{
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018."
  constructor(private restService : SimpleRestApiService) {
    
  }
  login() {
    

    console.log("dsadsa");
  }
}
