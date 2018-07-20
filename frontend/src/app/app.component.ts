import { Component, OnInit, Injectable } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import { SimpleRestApiService } from './service/simple-rest-api-service';
import { RestConstants } from './service/RestConstants';

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
    
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    this.restService.getUrlServiceWithParams(RestConstants.CHECK_USER, 
                      {username : username,
                      password : password}).subscribe(
                    (res : number) => {
                      if(res != -1) {
                        var date = new Date();
                        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
                        document.cookie = "userId=" + res + ";expires=" + date.toUTCString + ";";
                      } else {
                        alert("Login nije uspio");
                      }
                    }
    );
  }
}
